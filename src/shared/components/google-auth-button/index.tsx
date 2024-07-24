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
import { userLoginAction } from '../../../shared/redux/user/user-slice';
import { useGoogleRegisterMutation } from '../../../shared/apis/user-api';

type GoogleUserData = {
  email?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
};

const GOOGLE_PROFILE_URL = (token: string) =>
  `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`;

export function GoogleAuthButton({ disabled = false }: { disabled?: boolean }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading: isRegisterLoading }] = useGoogleRegisterMutation();

  const registerUser = (userData: GoogleUserData) => {
    if (!userData?.email) {
      handleGoogleError();
      return;
    }

    register({
      email: userData.email,
      picture: userData.picture || null,
      firstName: userData.given_name || '',
      lastName: userData.family_name || ''
    })
      .then(({ data }) => {
        if (data) {
          dispatch(userLoginAction(data));
          navigate(ROUTES.CHAT);
        } else {
          notify.error({ message: 'Error!' });
        }
      })
      .catch(() => notify.error({ message: 'SERVER ERROR!' }));
  };

  const handleGoogleError = () => {
    notify.error({ message: 'Google method is not available now' });
  };

  const handleClick = useGoogleLogin({
    onError: handleGoogleError,
    onSuccess: ({ access_token }) => {
      if (!access_token) return;
      fetch(GOOGLE_PROFILE_URL(access_token))
        .then((res) => res.json())
        .then((userData) => registerUser(userData))
        .catch(handleGoogleError);
    }
  });

  useGoogleOneTapLogin({
    auto_select: true,
    use_fedcm_for_prompt: true,
    cancel_on_tap_outside: true,
    onError: handleGoogleError,
    onSuccess: ({ credential }: CredentialResponse) => {
      const decodedData = jwtDecode(credential || '') as GoogleUserData;
      registerUser(decodedData);
    }
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
