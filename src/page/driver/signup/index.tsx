import React, { useContext, useEffect, useState } from 'react';
import style from '../../../components/page/signup/index.module.css';
import { Link } from 'react-router-dom';
import { signupValidation } from '../../../lib/function/validation';
import {
  InvisibleInputComponent,
  NomalInputComponent,
} from '../../../components/input/AuthInput';
import AuthBtn from '../../../components/btn/AuthBtn';
import { DriverSignupTop } from '../../../components/page/auth/AuthTop';
import { DriverSignupBottom } from '../../../components/page/auth/AuthBottom';
import { auth } from '../../../lib/api/auth';
import { isAxiosError } from 'axios';
import { AuthContext } from '../../../context/authContext';

type FormLogin = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

type FormValidation = {
  name: boolean;
  email: boolean;
  phoneNumber: boolean;
  password: boolean;
  confirmPassword: boolean;
};

export default function DriverSignupPage() {
  const {
    userValue: { user, isPending },
  } = useContext(AuthContext);

  useEffect(() => {
    if (!isPending && user) {
      window.location.href = '/';
    }
  }, [user, isPending]);

  const [values, setValues] = useState<FormLogin>({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [validation, setValidation] = useState<FormValidation>({
    name: true,
    email: true,
    phoneNumber: true,
    password: true,
    confirmPassword: true,
  });

  const [errorMessage, setErrorMessage] = useState<{
    email: string;
  }>({
    email: '',
  });

  const [isSignupPending, setIsSignupPending] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const inputHeandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    const { password } = values; // 비밀번호 확인 용

    setValues({
      ...values,
      [name]: value,
    });

    if (isSubmitted) {
      setValidation({
        ...validation,
        [name]: signupValidation(name, value, password),
      });
    }
  };

  const signupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (
      !!values.email &&
      !!values.password &&
      !!values.name &&
      !!values.phoneNumber &&
      !!values.confirmPassword &&
      validation.email &&
      validation.password &&
      validation.name &&
      validation.phoneNumber &&
      validation.confirmPassword
    ) {
      const request = {
        email: values.email,
        password: values.password,
        name: values.name,
        phoneNumber: values.phoneNumber,
      };

      try {
        setIsSignupPending(true);
        const response = await auth.post(
          '/user/signup?userType=MOVER',
          request
        );

        alert(response.data);
        window.location.href = '/driver/login';
      } catch (e) {
        if (isAxiosError(e)) {
          const data = e.response?.data;

          setValidation({
            ...validation,
            email: false,
          });

          setErrorMessage({
            ...errorMessage,
            email: data.message,
          });
        }
      } finally {
        setIsSignupPending(false);
      }
    }
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <DriverSignupTop />
        <div className={style.mid}>
          <form className={style.loginForm} onSubmit={signupSubmit}>
            <NomalInputComponent
              title="이름"
              placeholder="성함을 입력해 주세요"
              value={values.name}
              name="name"
              inputHeandler={inputHeandler}
              validation={validation.name}
              errorMessage="2글자 이상, 10자 이하로 입력해주세요."
            />
            <NomalInputComponent
              title="이메일"
              placeholder="이메일을 입력해 주세요"
              value={values.email}
              name="email"
              inputHeandler={inputHeandler}
              validation={validation.email}
              errorMessage={
                errorMessage.email
                  ? errorMessage.email
                  : '이메일 형식이 아닙니다.'
              }
            />
            <NomalInputComponent
              title="전화번호"
              placeholder="숫자만 입력해 주세요"
              value={values.phoneNumber}
              name="phoneNumber"
              inputHeandler={inputHeandler}
              validation={validation.phoneNumber}
              errorMessage="전화번호를 입력해 주세요"
            />
            <InvisibleInputComponent
              title="비밀번호"
              placeholder="비밀번호을 입력해 주세요"
              value={values.password}
              name="password"
              inputHeandler={inputHeandler}
              validation={validation.password}
              errorMessage="비밀번호가 올바르지 않습니다."
            />
            <InvisibleInputComponent
              title="비밀번호 확인"
              placeholder="비밀번호을 다시 한번 입력해 주세요"
              value={values.confirmPassword}
              name="confirmPassword"
              inputHeandler={inputHeandler}
              validation={validation.confirmPassword}
              errorMessage="비밀번호가 일치하지 않습니다."
            />
            <AuthBtn
              context={isSignupPending ? 'loading...' : '시작하기'}
              validation={
                !!values.email &&
                !!values.password &&
                !!values.name &&
                !!values.phoneNumber &&
                !!values.confirmPassword &&
                validation.email &&
                validation.password &&
                validation.name &&
                validation.phoneNumber &&
                validation.confirmPassword
              }
            />
          </form>
          <p>
            이미 무빙 회원이신가요?
            <Link to="/driver/login">로그인</Link>
          </p>
        </div>
        <DriverSignupBottom />
      </div>
    </div>
  );
}
