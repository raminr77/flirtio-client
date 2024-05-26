import { HomeIntro } from "./home-intro";
import { HomeStart } from "./home-start";
import { HomeTerms } from "./home-terms";
import { HomeAbout } from "./home-about";
import { HOME_MENU } from "./constants";
import { ToggleThemeButton } from "../../shared/components/toggle-theme-button";

const MENU_ITEM_CLASSES: string = 'duration-300 border-b px-3 leading-7 hover:-translate-y-1';

export function HomePage(){
  return (
    <div className='flex flex-col w-full justify-center items-center relative'>

      <header className='w-full z-10 top-0 pt-3 pb-2 px-5 flex items-center justify-between fixed backdrop-blur-sm dark:bg-black/30'>
        <ToggleThemeButton/>

        <div className='text-sm flex items-center justify-center gap-x-3'>
          <a className={MENU_ITEM_CLASSES} href={`#${HOME_MENU.HOME}`}>Home</a>
          <a className={MENU_ITEM_CLASSES} href={`#${HOME_MENU.ABOUT}`}>About</a>
          <a className={MENU_ITEM_CLASSES} href={`#${HOME_MENU.TERMS}`}>Terms</a>
          <a className={MENU_ITEM_CLASSES} href={`#${HOME_MENU.START}`}>Start</a>
        </div>

        <img width={36} alt='FLIRTIO' className='max-sm:hidden' src='/images/logo.png'/>
      </header>

      <HomeIntro/>
      <HomeAbout/>
      <HomeTerms/>
      <HomeStart/>

      <footer className='w-full mb-10 flex flex-col items-center justify-center'>
        <div className='text-xs'>Developed by <a target='_blank' href='https://raminrezaei.ir'>
          Ramin
        </a></div>

        <div className='flex items-center justify-center text-xs opacity-70 mt-4 gap-x-3'>
          <a href={`#${HOME_MENU.HOME}`}>Home</a>
          <a href={`#${HOME_MENU.ABOUT}`}>About</a>
          <a href={`#${HOME_MENU.TERMS}`}>Terms</a>
          <a href={`#${HOME_MENU.START}`}>Start</a>
        </div>
      </footer>
    </div>
  )
}
