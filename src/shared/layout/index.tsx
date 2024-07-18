import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

import { toggleDarkMode } from "../redux/app/app-slice.ts";
import { appSelectors } from "../redux/app/app-selectors.ts";
import { ModalProvider } from "../components/modal-provider/index.tsx";

export function Layout({ children }: GCommonComponentPropertiesWithChildren) {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(appSelectors.appData);
  const toastStyle = {
    borderRadius: '8px',
    color: darkMode ? '#fff' : '#1e293b',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    background: darkMode ? '#475569' : '#e2e8f0'
  };

  useEffect(() => {
    dispatch(toggleDarkMode(true));
  }, []);

  return (
    <main className='relative min-h-screen select-none flex flex-col w-full overflow-x-hidden bg-white dark:bg-black text-black dark:text-white'>
      <img
        alt=""
        className="top-0 fixed z-0"
        src="/images/background.png"
      />
      <ModalProvider />

      {children}

      <Toaster
          position='bottom-center'
          toastOptions={{ className: 'select-none text-sm', style: toastStyle }}
      />
    </main>
  )
}
