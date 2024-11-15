import { MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { animator } from '../../utils/animator';
import { classnames } from '../../utils/classnames';
import { MODAL_NAMES } from '../../constants/modals';
import { hideModals } from '../../redux/app/app-slice';
import { appSelectors } from '../../redux/app/app-selectors';

import { ProfileModal, CreditModal, PaymentModal, AboutModal } from '../modals';

export function ModalProvider() {
  const dispatch = useDispatch();
  const { activeModal } = useSelector(appSelectors.appData);

  const handleCloseModal = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(hideModals());
  };

  const handleCloseButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(hideModals());
  };

  useEffect(() => {
    const shortcuts = (event: KeyboardEvent) =>
      event.key === 'Escape' && dispatch(hideModals());

    document.addEventListener('keyup', shortcuts);
    return () => document.removeEventListener('keyup', shortcuts);
  }, []);

  return (
    <div
      onClick={handleCloseModal}
      className='absolute bg-black/50 overflow-hidden p-5 flex items-center justify-center w-full h-screen top-0 left-0 z-40'
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={classnames(
          animator({ name: 'fadeInUp', speed: 'faster' }),
          'w-11/12 max-w-sm relative py-3 px-4 rounded-lg shadow-sm dark:bg-slate-500/50 bg-slate-200 backdrop-blur-md'
        )}
      >
        <button
          onClick={handleCloseButton}
          className='absolute -top-2 -right-2 shadow-sm'
        >
          <img alt='CLOSE' width={36} height={36} src='/images/close.png' />
        </button>

        {activeModal === MODAL_NAMES.PROFILE_MODAL && <ProfileModal />}
        {activeModal === MODAL_NAMES.PAYMENT_MODAL && <PaymentModal />}
        {activeModal === MODAL_NAMES.CREDIT_MODAL && <CreditModal />}
        {activeModal === MODAL_NAMES.ABOUT_MODAL && <AboutModal />}
      </div>
    </div>
  );
}
