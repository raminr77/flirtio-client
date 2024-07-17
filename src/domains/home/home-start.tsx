import { useState } from "react";
import { HOME_MENU } from "./constants";
import { LoginForm } from "./components/login-form.tsx";
import { RegisterForm } from "./components/register-form.tsx";


export function HomeStart() {
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const changeForm = () => setShowLoginForm((state: boolean) => !state);

  return (
    <section id={HOME_MENU.START} className='w-full text-sm h-screen flex flex-col items-center justify-center z-10'>
      <div className='w-11/12 max-w-sm flex flex-col gap-y-2 bg-slate-100/20 dark:bg-slate-800/40 rounded-md shadow-md p-5'>
        <div className='flex items-center justify-center gap-x-3 mb-5 lato-black-italic'>
          <img width={42} src='/images/logo.png' alt='FLIRTIO'/>
          <h1>{`${showLoginForm ? 'Login' : 'Join'} to FLIRTIO`}</h1>
        </div>

        {showLoginForm ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}

        <button
          onClick={changeForm}
          className='bg-white dark:bg-slate-500/20 rounded leading-7 py-2'
        >
          {showLoginForm ? 'Create A New Account' : 'Login To Your Account'}
        </button>
      </div>
    </section>
  )
}
