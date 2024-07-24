import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes';
import { userLoginAction } from 'shared/redux/user/user-slice';
import { classnames } from 'shared/utils/classnames';

export function GoogleAuthButton({ disabled = false }: { disabled?: boolean }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <button
      disabled={disabled}
      onClick={googleAction}
      className={classnames(
        'min-w-11 h-11 bg-white dark:bg-slate-500/20 rounded leading-7 py-2 text-black flex items-center justify-center gap-x-3',
        {
          'pointer-events-none opacity-50': disabled
        }
      )}
    >
      <img width={18} src='/images/google.png' alt='Google' />
    </button>
  );
}
