import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  type CredentialResponse,
  useGoogleLogin,
  useGoogleOneTapLogin
} from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

import { notify } from '../../../shared/utils/notify';
import { ROUTES } from '../../../shared/constants/routes';
import { classnames } from '../../../shared/utils/classnames';
import { useRegisterMutation } from '../../../shared/apis/user-api';
import { userLoginAction } from '../../../shared/redux/user/user-slice';

type GoogleUserData = {
  email?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
};

export function GoogleAuthButton({ disabled = false }: { disabled?: boolean }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  const handleGoogleError = () => {
    console.log('GOOGLE ERROR');
    notify.error({ message: 'Google method is not available now' });
  };

  const registerGoogleUser = ({ credential }: CredentialResponse) => {
    const decodedData = jwtDecode(credential || '') as GoogleUserData;

    if (!decodedData?.email) {
      handleGoogleError();
      return;
    }

    register({
      email: decodedData.email,
      picture: decodedData.picture || null,
      firstName: decodedData.given_name || '',
      lastName: decodedData.family_name || ''
    })
      .then(({ data }) => {
        if (data) {
          dispatch(userLoginAction(data));
          navigate(ROUTES.CHAT);
        } else {
          notify.error({ message: 'SERVER ERROR!' });
        }
      })
      .catch(() => notify.error({ message: 'SERVER ERROR!' }));
  };

  const handleClick = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: ({ code }) => {
      console.log(code);
    },
    onError: handleGoogleError
  });

  useGoogleOneTapLogin({
    auto_select: true,
    use_fedcm_for_prompt: true,
    cancel_on_tap_outside: true,
    onSuccess: registerGoogleUser,
    onError: handleGoogleError
  });

  return (
    <button
      onClick={() => handleClick()}
      disabled={disabled || isRegisterLoading}
      className={classnames(
        'min-w-11 h-11 bg-white dark:bg-slate-500/20 rounded leading-7 py-2 text-black flex items-center justify-center gap-x-3',
        {
          'pointer-events-none opacity-50': disabled || isRegisterLoading
        }
      )}
    >
      <img width={18} src='/images/google.png' alt='Google' />
    </button>
  );
}
