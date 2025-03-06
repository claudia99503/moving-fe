import React, { useContext, useEffect, useState } from 'react';
import { TextBtn } from '../../../components/page/edit/EditBtn';
import style from './index.module.css';
import { UserRegisterFormValidation, UserRegisterFormValues } from './type';
import { ServiceRegion } from '../../../components/page/register/Region';
import RegisterMidComponent from './components/Mid';
import { translateServiceReverseRegion } from '../../../lib/function/utils';
import { auth } from '../../../lib/api/auth';
import { isAxiosError } from 'axios';
import { AuthContext } from '../../../context/authContext';

export default function UserRegisterPage() {
  const {
    userValue: { user, isPending },
  } = useContext(AuthContext);
  useEffect(() => {
    if (!isPending && user && user?.Customer?.profileImage) {
      window.location.href = '/';
    }
  }, [user, isPending]);

  const [preview, setPreview] = useState<string | undefined>();
  const [values, setValues] = useState<UserRegisterFormValues>({
    image: null,
    region: undefined,
    small: undefined,
    house: undefined,
    office: undefined,
  });

  const [validation, setValidation] = useState<UserRegisterFormValidation>({
    image: true,
    region: false,
  });

  const inputHeandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, checked, type } = e.currentTarget;

    if (files?.[0]) {
      const file = files?.[0];
      setValues({
        ...values,
        image: file,
      });

      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    } else if (name === 'small' || name === 'house' || name === 'office') {
      if (values[name]) {
        setValues({
          ...values,
          [name]: undefined,
        });
      } else {
        setValues({
          ...values,
          [name]: value,
        });
      }
    } else if (type === 'checkbox') {
      if (values.region && values.region !== name) {
        setValues({
          ...values,
          region: name as ServiceRegion,
        });
        setValidation({
          ...validation,
          region: true,
        });
      } else {
        setValues({
          ...values,
          region: checked ? (name as ServiceRegion) : undefined,
        });

        setValidation({
          ...validation,
          region: checked,
        });
      }
    }
  };

  const [isLoginPending, setIsLoginPending] = useState<boolean>(false);

  const profileRegister = async () => {
    if (
      validation.region &&
      !!values.region &&
      (!!values.small || !!values.house || !!values.office)
    ) {
      const keys = Object.keys(values) as [];

      const formData = {
        region: translateServiceReverseRegion(values.region as string),
        profileImage: values.image,
        serviceType: keys
          .filter((data) => {
            const service = ['office', 'small', 'house'];
            return service.includes(data);
          })
          .filter((data) => {
            return values[data] === 'on';
          })
          .map((data) => (data as string).toUpperCase()),
      };

      try {
        setIsLoginPending(true);
        await auth.patch('/customer/profile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('회원가입이 완료되었습니다.');
        window.location.href = '/';
      } catch (e) {
        if (isAxiosError(e)) {
          const data = e.response?.data;

          alert(data);
        }
      } finally {
        setIsLoginPending(false);
      }
    } else {
      return;
    }
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <header className={style.top}>
          <span className={style.firstText}>프로필 등록</span>
          <span className={style.secoundText}>
            추가 정보를 입력하여 회원가입을 완료해주세요.
          </span>
        </header>
        <RegisterMidComponent
          values={values}
          validation={validation}
          inputHeandler={inputHeandler}
          preview={preview ?? user?.Customer?.profileImage}
        />
        <div className={style.bottom}>
          <TextBtn
            onClick={profileRegister}
            text={isLoginPending ? 'loading...' : '시작하기'}
            validation={
              validation.region &&
              validation.image &&
              !!values.region &&
              !!values.image &&
              (!!values.small || !!values.house || !!values.office)
            }
          />
        </div>
      </div>
    </div>
  );
}
