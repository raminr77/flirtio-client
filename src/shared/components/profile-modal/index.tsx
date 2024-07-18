import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthInput } from "../../../domains/home/components/auth-input";
import { userSelectors } from "../../../shared/redux/user/user-selectors";
import { classnames } from "../../../shared/utils/classnames";

type ProfileFormInputs = {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    rePassword: string;
};

export function ProfileModal() {
    const userData = useSelector(userSelectors.userInfo);
    const {
      getValues,
      reset: registerReset,
      register: registerForm,
      handleSubmit: handleRegisterSubmit,
      formState: { errors: registerErrors}
    } = useForm<ProfileFormInputs>({
        defaultValues: {
            ...userData
        }
    });

    const onUpdateSubmit: SubmitHandler<ProfileFormInputs> = (data) => {
        // TODO 2: Update API Request
        console.log(data);
        registerReset();
    };

    useEffect(() => {
        return () => registerReset();
    }, []);

    return (
        <div className="flex flex-col text-sm">
            <h3 className="mb-3 lato-bold-italic text-lg">Profile</h3>
            <label className="mx-auto rounded-full hover:opacity-50 duration-300 cursor-pointer bg-slate-300 dark:bg-black/10 mb-5">
                <img
                    width={100}
                    height={100}
                    className={classnames('rounded-full overflow-hidden', {
                        'invert': !userData.picture
                    })} 
                    alt={userData.firstName}
                    src={userData.picture ? userData.picture : '/images/user.png'} 
                />
                <input type="file" hidden />
            </label>
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
                <div className="col-span-2">
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
                </div>
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
            <button
                onClick={handleRegisterSubmit(onUpdateSubmit)}
                className='w-full bg-red-500 text-white leading-7 py-2 mt-3 rounded'
            >
                Update
            </button>
        </div>
    );
}
