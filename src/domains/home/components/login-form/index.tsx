import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { notify } from '../../../../shared/utils/notify';
import { Input } from '../../../../shared/components/input';
import { ROUTES } from '../../../../shared/constants/routes';
import { classnames } from '../../../../shared/utils/classnames';
import {
  useForgetPasswordMutation,
  useLoginMutation
} from '../../../../shared/apis/user-api';
import { emailRegExp, validateEmail } from '../../../../shared/utils/validate-email';
import { userLoginAction } from '../../../../shared/redux/user/user-slice';
import { GoogleAuthButton } from '../../../../shared/components/google-auth-button';

type LoginFormInputs = {
  email: string;
  password: string;
};

export function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showRecoverForm, setShowRecoverForm] = useState<boolean>(false);
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [forgetPassword, { isLoading: isForgetPasswordLoading }] =
    useForgetPasswordMutation();

  const {
    getValues,
    reset: loginReset,
    register: loginForm,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors }
  } = useForm<LoginFormInputs>();

  const onLoginSubmit: SubmitHandler<LoginFormInputs> = (requestData) => {
    if (!requestData.email) return;
    login(requestData)
      .then(({ data }) => {
        loginReset();
        dispatch(userLoginAction(data));
        navigate(ROUTES.CHAT);
      })
      .catch(() => notify.error({ message: 'SERVER ERROR!' }));
  };

  const handleRecoverPassword = () => {
    const email = getValues('email');
    if (!validateEmail(email)) {
      notify.error({ message: 'Your email address is not correct.' });
      return;
    }
    forgetPassword({ email })
      .then(() => {
        setShowRecoverForm(false);
        notify.success({ message: 'We sent login URL to your email address.' });
      })
      .catch(() => notify.error({ message: 'SERVER ERROR!' }));
  };

  useEffect(() => {
    return () => loginReset();
  }, []);

  return (
    <>
      <div
        className={classnames('grid grid-cols-1 gap-2', {
          'pointer-events-none opacity-50': isLoginLoading
        })}
      >
        <Input
          type='email'
          disabled={isLoginLoading}
          placeholder='Email Address'
          error={loginErrors.email?.message}
          options={{
            ...loginForm('email', {
              required: 'Required',
              pattern: {
                value: emailRegExp,
                message: 'Entered value does not match email format'
              }
            })
          }}
        />

        {!showRecoverForm && (
          <Input
            type='password'
            placeholder='Password'
            disabled={isLoginLoading}
            error={loginErrors.password?.message}
            options={{
              ...loginForm('password', {
                required: 'Required',
                minLength: {
                  value: 10,
                  message: 'Your password should be 10 characters.'
                }
              })
            }}
          />
        )}
      </div>
      <button
        onClick={() => setShowRecoverForm((state) => !state)}
        className='mt-3 text-red-500 cursor-pointer flex'
      >
        {showRecoverForm ? 'Login to your account' : 'Recover your password'}
      </button>
      <div className='flex items-center gap-2 mt-3'>
        <button
          disabled={isLoginLoading || isForgetPasswordLoading}
          onClick={
            showRecoverForm ? handleRecoverPassword : handleLoginSubmit(onLoginSubmit)
          }
          className={classnames('w-full bg-red-500 text-white leading-7 py-2 rounded', {
            'pointer-events-none opacity-50': isLoginLoading || isForgetPasswordLoading
          })}
        >
          {showRecoverForm ? 'SEND LINK' : 'LOGIN'}
        </button>
        <GoogleAuthButton disabled={isLoginLoading} />
      </div>
    </>
  );
}
