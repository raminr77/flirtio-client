import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { classnames } from '../../../../shared/utils/classnames';
import { useGetProfileQuery } from '../../../../shared/apis/user-api';
import { userSelectors } from '../../../../shared/redux/user/user-selectors';

import { Input } from '../../input';

type ProfileFormInputs = {
  password: string;
  lastName: string;
  firstName: string;
  rePassword: string;
};

export function ProfileModal() {
  const userData = useSelector(userSelectors.userInfo);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [picture, setPicture] = useState<string | null>(userData.picture || null);
  const { data, isLoading } = useGetProfileQuery();

  const {
    getValues,
    reset: registerReset,
    register: registerForm,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors }
  } = useForm<ProfileFormInputs>({
    defaultValues: {
      ...userData
    }
  });

  const handleFileChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    if (file) {
      setPicture(URL.createObjectURL(file));
    }
  };

  const onUpdateSubmit: SubmitHandler<ProfileFormInputs> = (data) => {
    // TODO 2: Update API Request
    console.log(data, picture, fileInputRef.current);
    registerReset();
  };

  useEffect(() => {
    return () => registerReset();
  }, []);

  console.log(data, isLoading);

  return (
    <div className='flex flex-col text-sm'>
      <h3 className='mb-3 lato-bold-italic text-lg'>Profile</h3>
      <label className='mx-auto rounded-full hover:opacity-50 duration-300 cursor-pointer bg-slate-300 dark:bg-black/10'>
        <img
          width={100}
          height={100}
          className={classnames('rounded-full overflow-hidden', {
            invert: !picture
          })}
          alt={userData.firstName}
          src={picture ? picture : '/images/user.png'}
        />
        <input
          hidden
          type='file'
          name='picture'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </label>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5'>
        <Input
          placeholder='First Name'
          error={registerErrors.firstName?.message}
          options={{
            ...registerForm('firstName', {
              required: 'Required'
            })
          }}
        />
        <Input
          placeholder='Last Name'
          error={registerErrors.lastName?.message}
          options={{
            ...registerForm('lastName', {
              required: 'Required'
            })
          }}
        />
        <div className='col-span-2 opacity-60'>
          <Input disabled type='email' placeholder='Email Address' />
        </div>
        <div className='col-span-2 mt-4 mb-1'>For Change your password:</div>
        <Input
          type='password'
          placeholder='Password'
          error={registerErrors.password?.message}
          options={{
            ...registerForm('password', {
              minLength: {
                value: 10,
                message: 'Your password should be 10 characters.'
              },
              required: false
            })
          }}
        />
        <Input
          type='password'
          placeholder='Repeat Password'
          error={registerErrors.rePassword?.message}
          options={{
            ...registerForm('rePassword', {
              required: false,
              minLength: {
                value: 10,
                message: 'Your password should be 10 characters.'
              },
              validate: (repass) =>
                repass === getValues('password') || 'Your passwords are not the same!'
            })
          }}
        />
      </div>
      <button
        onClick={handleRegisterSubmit(onUpdateSubmit)}
        className='w-full bg-red-500 text-white leading-7 py-2 mt-3 rounded'
      >
        Update
      </button>
    </div>
  );
}
