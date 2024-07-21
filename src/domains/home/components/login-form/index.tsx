import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { notify } from '../../../../shared/utils/notify';
import { Input } from '../../../../shared/components/input';
import { ROUTES } from '../../../../shared/constants/routes';
import { classnames } from '../../../../shared/utils/classnames';
import { useLoginMutation } from '../../../../shared/apis/user-api';
import { userLoginAction } from '../../../../shared/redux/user/user-slice';

type LoginFormInputs = {
  email: string;
  password: string;
};

export function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const {
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

  const googleAction = () => {
    // TODO 1: Google Auth API Request
    console.log('Google Action Login');
    dispatch(
      userLoginAction({
        firstName: 'Ramin',
        lastName: 'Rezaei',
        email: 'info@raminrezaei.ir'
      })
    );
    navigate(ROUTES.CHAT);
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
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format'
              }
            })
          }}
        />
        <Input
          type='password'
          placeholder='Password'
          disabled={isLoginLoading}
          error={loginErrors.password?.message}
          options={{
            ...loginForm('password', {
              required: 'Required'
            })
          }}
        />
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <button
          disabled={isLoginLoading}
          onClick={handleLoginSubmit(onLoginSubmit)}
          className={classnames('w-full bg-red-500 text-white leading-7 py-2 rounded', {
            'pointer-events-none opacity-50': isLoginLoading
          })}
        >
          LOGIN
        </button>
        <button
          onClick={googleAction}
          className={classnames(
            'min-w-11 h-11 bg-white dark:bg-slate-500/20 rounded leading-7 py-2 text-black flex items-center justify-center gap-x-3',
            {
              'pointer-events-none opacity-50': isLoginLoading
            }
          )}
        >
          <img width={18} src='/images/google.png' alt='Google' />
        </button>
      </div>
    </>
  );
}
