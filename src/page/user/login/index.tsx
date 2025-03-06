import React, { useContext, useEffect, useState } from 'react';

import style from '../../../components/page/login/index.module.css';
import { loginValidation } from '../../../lib/function/validation';
import { Link } from 'react-router-dom';
import {
  InvisibleInputComponent,
  NomalInputComponent,
} from '../../../components/input/AuthInput';
import AuthBtn from '../../../components/btn/AuthBtn';
import { UserLoginTop } from '../../../components/page/auth/AuthTop';
import { UserLoginBottom } from '../../../components/page/auth/AuthBottom';
import { auth } from '../../../lib/api/auth';
import { isAxiosError } from 'axios';
import { AuthContext } from '../../../context/authContext';

type FormLogin = {
  email: string;
  password: string;
};

type FormValidation = {
  email: boolean;
  password: boolean;
};

export default function UserLoginPage() {
  const {
    userValue: { user, isPending },
  } = useContext(AuthContext);

  useEffect(() => {
    if (!isPending && user) {
      window.location.href = '/';
    }
  }, [user, isPending]);
  const [values, setValues] = useState<FormLogin>({
    email: '',
    password: '',
  });

  const [validation, setValidation] = useState<FormValidation>({
    email: true,
    password: true,
  });

  const [errorMessage, setErrorMessage] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const [isLoginPending, setIsLoginPending] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const inputHeandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });

    if (isSubmitted) {
      setValidation({
        ...validation,
        [name]: loginValidation(name, value),
      });
    }
  };

  const loginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      values.email &&
      values.password &&
      validation.email &&
      validation.password
    ) {
      try {
        setIsLoginPending(true);
        await auth.post('/user/login', values);
        window.location.href = '/';
      } catch (e) {
        if (isAxiosError(e)) {
          const data = e.response?.data;

          setValidation({
            ...validation,
            [data.type]: false,
          });

          setErrorMessage({
            ...errorMessage,
            [data.type]: data.message,
          });
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
        <UserLoginTop />
        <div className={style.mid}>
          <form className={style.loginForm} onSubmit={loginSubmit}>
            <NomalInputComponent
              title='이메일'
              placeholder='이메일을 입력해 주세요'
              value={values.email}
              name='email'
              inputHeandler={inputHeandler}
              validation={validation.email}
              errorMessage={
                errorMessage.email
                  ? errorMessage.email
                  : '이메일 형식이 아닙니다.'
              }
            />
            <InvisibleInputComponent
              title='비밀번호'
              placeholder='비밀번호을 입력해 주세요'
              value={values.password}
              name='password'
              inputHeandler={inputHeandler}
              validation={validation.password}
              errorMessage={
                errorMessage.password
                  ? errorMessage.password
                  : '비밀번호가 올바르지 않습니다.'
              }
            />
            <AuthBtn
              context={isLoginPending ? 'loading...' : '로그인'}
              validation={
                !!values.email &&
                !!values.password &&
                validation.email &&
                validation.password
              }
            />
          </form>

          <p>
            아직 무빙 회원이 아니신가요?
            <Link to='/user/signup'>이메일로 회원가입하기</Link>
          </p>
        </div>
        <UserLoginBottom />
      </div>
    </div>
  );
}
