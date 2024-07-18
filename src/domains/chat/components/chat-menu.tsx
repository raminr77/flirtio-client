import { MouseEvent } from "react";
import { animator } from "../../../shared/utils/animator";
import { classnames } from "../../../shared/utils/classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogoutAction } from "../../../shared/redux/user/user-slice";
import { ROUTES } from "../../../shared/constants/routes";

interface ChatMenuProps {
    show: boolean;
    onClose: (event: MouseEvent<HTMLDivElement>) => void;
}


export function ChatMenu({ show = false, onClose }: ChatMenuProps){
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    
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
            id: 4,
            title: 'Exit',
            action: logout
        }
    ];

    return show && (
        <div
          onClick={onClose}
          className={classnames(
            animator({ name: "fadeIn" }),
            "absolute top-0 right-0 w-full h-screen z-50 dark:bg-black/90 bg-black/50 p-8 overflow-hidden flex flex-col items-center justify-center gap-2"
          )}
        >
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