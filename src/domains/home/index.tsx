import { HomeIntro } from "./home-intro";
import { HomeStart } from "./home-start";
import { HomeTerms } from "./home-terms";
import { HomeAbout } from "./home-about";
import { HOME_MENU } from "./constants";
import { HomeParticles } from "./home-particles";
import { ToggleThemeButton } from "../../shared/components/toggle-theme-button";

const MENU_ITEM_CLASSES: string = 'duration-300 border-b px-3 leading-7 hover:-translate-y-1 border-b-black dark:border-b-white';

export function HomePage(){
  return (
    <div className='flex flex-col w-full justify-center items-center relative'>

      <header className='w-full z-30 top-0 pt-3 pb-2 px-5 flex items-center justify-between fixed backdrop-blur-sm dark:bg-black/30'>
        <ToggleThemeButton/>

        <div className='text-sm flex items-center justify-center gap-x-3'>
          <a className={MENU_ITEM_CLASSES} href={`#${HOME_MENU.HOME}`}>Home</a>
          <a className={MENU_ITEM_CLASSES} href={`#${HOME_MENU.ABOUT}`}>About</a>
          <a className={MENU_ITEM_CLASSES} href={`#${HOME_MENU.TERMS}`}>Terms</a>
          <a className={MENU_ITEM_CLASSES} href={`#${HOME_MENU.START}`}>Start</a>
        </div>

        <img width={36} alt='FLIRTIO' className='max-sm:hidden' src='/images/logo.png'/>
      </header>

      <HomeIntro />
      <HomeAbout />
      <HomeTerms />
      <HomeStart />

      <HomeParticles />

      <div className="w-full fixed top-0 h-screen pointer-events-none z-0 opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute bottom-0">
          <path fill="#00142D" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,208C384,245,480,267,576,266.7C672,267,768,245,864,218.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      <footer className='w-full mb-10 flex flex-col items-center justify-center z-30'>
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
