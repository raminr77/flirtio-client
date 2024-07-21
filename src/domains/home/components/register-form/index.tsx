import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { notify } from '../../../../shared/utils/notify';
import { Input } from '../../../../shared/components/input';
import { ROUTES } from '../../../../shared/constants/routes';
import { classnames } from '../../../../shared/utils/classnames';
import { useRegisterMutation } from '../../../../shared/apis/user-api';
import { userLoginAction } from '../../../../shared/redux/user/user-slice';

import { HOME_MENU } from '../../constants';

import styles from './register-form.module.scss';

type RegisterFormInputs = {
  terms: boolean;
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  rePassword: string;
};

export function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  const {
    getValues,
    reset: registerReset,
    register: registerForm,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors }
  } = useForm<RegisterFormInputs>();

  const onRegisterSubmit: SubmitHandler<RegisterFormInputs> = (requestData) => {
    if (!requestData.email) return;
    register(requestData)
      .then(({ data }) => {
        registerReset();
        dispatch(userLoginAction(data));
        navigate(ROUTES.CHAT);
      })
      .catch(() => notify.error({ message: 'SERVER ERROR!' }));
  };

  const googleAction = () => {
    // TODO 1: Google Auth API Request
    console.log('Google Action Register');
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
    return () => registerReset();
  }, []);

  return (
    <>
      <div
        className={classnames('grid grid-cols-1 sm:grid-cols-2 gap-2', {
          'pointer-events-none opacity-50': isRegisterLoading
        })}
      >
        <Input
          placeholder='First Name'
          disabled={isRegisterLoading}
          error={registerErrors.firstName?.message}
          options={{
            ...registerForm('firstName', {
              required: 'Required'
            })
          }}
        />
        <Input
          placeholder='Last Name'
          disabled={isRegisterLoading}
          error={registerErrors.lastName?.message}
          options={{
            ...registerForm('lastName', {
              required: 'Required'
            })
          }}
        />
        <div className='col-span-2'>
          <Input
            type='email'
            disabled={isRegisterLoading}
            placeholder='Email Address'
            error={registerErrors.email?.message}
            options={{
              ...registerForm('email', {
                required: 'Required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format'
                }
              })
            }}
          />
        </div>
        <Input
          type='password'
          placeholder='Password'
          disabled={isRegisterLoading}
          error={registerErrors.password?.message}
          options={{
            ...registerForm('password', {
              required: 'Required'
            })
          }}
        />
        <Input
          type='password'
          placeholder='Repeat Password'
          disabled={isRegisterLoading}
          error={registerErrors.rePassword?.message}
          options={{
            ...registerForm('rePassword', {
              required: 'Required',
              validate: (repass) =>
                repass === getValues('password') || 'Your passwords are not the same!'
            })
          }}
        />
      </div>

      <div className='flex items-center gap-x-3 mt-1'>
        <label
          className={classnames('relative w-9 h-5', styles['register-form__switch'])}
        >
          <input
            type='checkbox'
            className='opacity-0 w-0 h-0'
            disabled={isRegisterLoading}
            {...registerForm('terms', { required: 'Required' })}
          />
          <span className='absolute cursor-pointer bg-red-300 dark:bg-slate-500 top-0 left-0 right-0 bottom-0' />
        </label>
        <div className='flex flex-col'>
          <span>
            Accept Terms and Conditions{' '}
            <a className='text-xs opacity-70' href={`#${HOME_MENU.TERMS}`}>
              ( Read More )
            </a>
          </span>
          {registerErrors.terms?.message && (
            <span className='text-red-600 text-xs'>{registerErrors.terms?.message}</span>
          )}
        </div>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <button
          disabled={isRegisterLoading}
          onClick={handleRegisterSubmit(onRegisterSubmit)}
          className={classnames('w-full bg-red-500 text-white leading-7 py-2 rounded', {
            'pointer-events-none opacity-50': isRegisterLoading
          })}
        >
          REGISTER
        </button>
        <button
          onClick={googleAction}
          disabled={isRegisterLoading}
          className={classnames(
            'min-w-11 h-11 bg-white dark:bg-slate-500/20 rounded leading-7 py-2 text-black flex items-center justify-center gap-x-3',
            {
              'pointer-events-none opacity-50': isRegisterLoading
            }
          )}
        >
          <img width={18} src='/images/google.png' alt='Google' />
        </button>
      </div>
    </>
  );
}
