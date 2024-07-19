import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input } from '../../../../shared/components/input';
import { useEffect } from 'react';
import { ROUTES } from '../../../../shared/constants/routes';
import { userLoginAction } from '../../../../shared/redux/user/user-slice';

type LoginFormInputs = {
  email: string;
  password: string;
};

export function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    reset: loginReset,
    register: loginForm,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors }
  } = useForm<LoginFormInputs>();

  const onLoginSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // TODO 3: Login API Request
    console.log(data);
    loginReset();
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
      <div className='grid grid-cols-1 gap-2'>
        <Input
          type='email'
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
          onClick={handleLoginSubmit(onLoginSubmit)}
          className='w-full bg-red-500 text-white leading-7 py-2 rounded'
        >
          LOGIN
        </button>
        <button
          onClick={googleAction}
          className='min-w-11 h-11 bg-white dark:bg-slate-500/20 rounded leading-7 py-2 text-black flex items-center justify-center gap-x-3'
        >
          <img width={18} src='/images/google.png' alt='Google' />
        </button>
      </div>
    </>
  );
}
