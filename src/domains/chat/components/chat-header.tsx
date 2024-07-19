import { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTES } from '../../../shared/constants/routes';
import { animator } from '../../../shared/utils/animator';
import { classnames } from '../../../shared/utils/classnames';
import { MODAL_NAMES } from '../../../shared/constants/modals';
import { showModal } from '../../../shared/redux/app/app-slice';
import { userSelectors } from '../../../shared/redux/user/user-selectors';
import { ToggleThemeButton } from '../../../shared/components/toggle-theme-button';

import { ChatMenu } from './chat-menu';

export function ChatHeader() {
  const dispatch = useDispatch();
  const { credit } = useSelector(userSelectors.userInfo);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleOpenMenu = () => setShowMenu(true);

  const handleOpenCreditModal = () => {
    dispatch(showModal(MODAL_NAMES.CREDIT_MODAL));
  };

  const handleCloseModal = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setShowMenu(false);
  };

  return (
    <header className='w-full z-10 top-0 pt-3 pb-2 px-5 flex items-center fixed justify-between backdrop-blur-sm bg-slate-50/50 dark:bg-slate-800/50 border-b border-b-slate-100 dark:border-black'>
      <ToggleThemeButton />

      <a href={ROUTES.HOME}>
        <img width={36} alt='FLIRTIO' src='/images/logo.png' />
      </a>

      <div className='flex items-center gap-3'>
        <button onClick={handleOpenCreditModal} className='flex items-center gap-2'>
          <span
            className={classnames(
              animator({ name: 'fadeIn', delay: '1s' }),
              'text-sm text-orange-600 dark:text-yellow-500'
            )}
          >
            {credit}
          </span>
          <img
            width={20}
            alt='STAR'
            src='/images/star.png'
            className={animator({ name: 'bounceIn' })}
          />
        </button>

        <button onClick={handleOpenMenu} className='p-2 rounded-full'>
          <img
            width={20}
            alt='MENU'
            className='invert-0 dark:invert'
            src='/images/menu.svg'
          />
        </button>
      </div>

      <ChatMenu show={showMenu} onClose={handleCloseModal} />
    </header>
  );
}
