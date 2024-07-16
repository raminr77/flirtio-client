import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../shared/constants/routes";
import { userLogoutAction } from "../../../shared/redux/user/user-slice";
import { ToggleThemeButton } from "../../../shared/components/toggle-theme-button";

export function ChatHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userLogoutAction());
    navigate(ROUTES.HOME);
  };

  return (
    <header
      className='w-full z-10 top-0 pt-3 pb-2 px-5 flex items-center fixed justify-between backdrop-blur-sm bg-slate-50/50 dark:bg-slate-800/50 border-b border-b-slate-100 dark:border-black'
    >
      <ToggleThemeButton/>
      <img width={36} alt='FLIRTIO' src='/images/logo.png'/>
      <button onClick={logout} className='p-2 rounded-full'>
        <img width={20} alt='Exit' className='invert-0 dark:invert' src='/images/exit.png'/>
      </button>
    </header>
  )
}
