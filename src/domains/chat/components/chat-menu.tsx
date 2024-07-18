import { MouseEvent } from "react";
import { animator } from "../../../shared/utils/animator";
import { classnames } from "../../../shared/utils/classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../../../shared/redux/user/user-slice";
import { ROUTES } from "../../../shared/constants/routes";
import { showModal } from "../../../shared/redux/app/app-slice";
import { MODAL_NAMES } from "../../../shared/constants/modals";
import { userSelectors } from "../../../shared/redux/user/user-selectors";

interface ChatMenuProps {
    show: boolean;
    onClose: (event: MouseEvent<HTMLDivElement>) => void;
}


export function ChatMenu({ show = false, onClose }: ChatMenuProps){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { picture, firstName } = useSelector(userSelectors.userInfo);
    
    const logout = () => {
        dispatch(userLogoutAction());
        navigate(ROUTES.HOME);
    };
    
    const MENU = [
        {
            id: 1,
            title: 'Profile',
            action: undefined
        },
        {
            id: 2,
            title: 'Payments',
            action: undefined
        },
        {
            id: 3,
            title: 'Get Credit',
            action: () => dispatch(showModal(MODAL_NAMES.CREDIT_MODAL))
        },
        {
            id: 4,
            title: 'Exit',
            action: logout
        }
    ];

    return show && (
        <div
          onClick={onClose}
          className={classnames(
            animator({ name: "fadeIn", speed: 'faster' }),
            "absolute top-0 right-0 w-full h-screen z-50 dark:bg-black/90 bg-black/50 p-8 overflow-hidden flex flex-col items-center justify-center gap-2"
          )}
        >
          <img
            width={120}
            height={120}
            className={classnames('rounded-full overflow-hidden', {
              'invert': !picture
            })} 
            alt={firstName}
            src={picture ? picture : '/images/user.png'} 
          />

          <h3 className="text-2xl mb-5 text-white">
            {firstName ? `Hi, ${firstName}` : 'Hello My Friend!'}
          </h3>

          {MENU.map(({ id, title, action }) => (
            <button
                key={id}
                onClick={action}
                className={classnames(
                animator({ name: 'fadeInUp' }),
                    "w-11/12 max-w-sm dark:bg-slate-700/50 bg-slate-50 backdrop-blur-md leading-9 py-2 rounded-md"
                )}
            >
              {title}
            </button>
          ))}
        </div>
    )
}