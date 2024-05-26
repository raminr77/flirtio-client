import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { HOME_MENU } from "../constants";
import { AuthInput } from "./auth-input";
import { classnames } from "../../../shared/utils/classnames";

import styles from "./register-form.module.scss";

type RegisterFormInputs = {
  terms: boolean;
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  rePassword: string;
  phoneNumber: string;
};

export function RegisterForm() {
  const {
    getValues,
    reset: registerReset,
    register: registerForm,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors}
  } = useForm<RegisterFormInputs>();

  const onRegisterSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log(data);
    registerReset();
  };

  const googleAction = () => {
    console.log('Google Action Register');
  };

  useEffect(() => {
    return () => registerReset();
  }, []);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <AuthInput
          placeholder='First Name'
          error={registerErrors.firstName?.message}
          options={{
            ...registerForm("firstName", {
              required: 'Required'
            })
          }}
        />
        <AuthInput
          placeholder='Last Name'
          error={registerErrors.lastName?.message}
          options={{
            ...registerForm("lastName", {
              required: 'Required'
            })
          }}
        />
        <AuthInput
          type='email'
          placeholder='Email Address'
          error={registerErrors.email?.message}
          options={{
            ...registerForm("email", {
              required: 'Required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              }
            })
          }}
        />
        <AuthInput
          placeholder='Phone Number'
          error={registerErrors.phoneNumber?.message}
          options={{
            ...registerForm("phoneNumber")
          }}
        />
        <AuthInput
          type='password'
          placeholder='Password'
          error={registerErrors.password?.message}
          options={{
            ...registerForm("password", {
              required: 'Required'
            })
          }}
        />
        <AuthInput
          type='password'
          placeholder='Repeat Password'
          error={registerErrors.rePassword?.message}
          options={{
            ...registerForm("rePassword", {
              required: 'Required',
              validate: (repass) => repass === getValues('password') || 'Your passwords are not the same!'
            })
          }}
        />
      </div>

      <div className='flex items-center gap-x-3 mt-1'>
        <label className={classnames("relative w-9 h-5", styles['register-form__switch'])}>
          <input
            type="checkbox"
            {...registerForm("terms", {required: 'Required'})}
            className='opacity-0 w-0 h-0'
          />
          <span className="absolute cursor-pointer bg-slate-200/20 top-0 left-0 right-0 bottom-0"/>
        </label>
        <div className='flex flex-col'>
          <span>Accept Terms and Conditions <a className='text-xs opacity-70'
                                               href={`#${HOME_MENU.TERMS}`}>( Read More )</a></span>
          {registerErrors.terms?.message && (
            <span className='text-red-600 text-xs'>{registerErrors.terms?.message}</span>
          )}
        </div>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <button
          onClick={handleRegisterSubmit(onRegisterSubmit)}
          className='w-full bg-red-500 text-white leading-7 py-2 rounded'
        >
          REGISTER
        </button>
        <button
          onClick={googleAction}
          className='min-w-11 h-11 bg-white dark:bg-slate-500/20 rounded leading-7 py-2 text-black flex items-center justify-center gap-x-3'
        >
          <img width={18} src='/images/google.png' alt='Google'/>
        </button>
      </div>
    </>
  )
}
