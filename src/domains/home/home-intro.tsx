import Lottie from "lottie-react";
import { HOME_MENU } from "./constants";
import { animator } from "../../shared/utils/animator";
import { classnames } from "../../shared/utils/classnames";

import LOVE_ANIMATION from '../../shared/assets/love-animation.json';

import styles from "./home-intro.module.scss";

export function HomeIntro() {
  return (
    <section id={HOME_MENU.HOME} className='w-11/12 relative h-screen flex flex-col items-center justify-center'>

      <div className='flex flex-col justify-center items-center'>
        <h1 className={classnames(
          'relative lato-black-italic',
          styles['home-intro__title'],
          animator({name: 'fadeIn'})
        )}>
          FLIRTIO
        </h1>
        <h3 className={classnames(
          'text-sm',
          animator({name: 'fadeIn', delay: '1s'})
        )}>
          Is an AI for chat and date essayer than before!
        </h3>
      </div>

      <a href={`#${HOME_MENU.START}`} className='animate-bounce absolute bottom-20 z-10'>
        <img className='invert-0 dark:invert w-8' alt='Start' src='/images/down-arrow.png'/>
      </a>
      <Lottie className='absolute bottom-20 z-0' animationData={LOVE_ANIMATION}/>
    </section>
  )
}
