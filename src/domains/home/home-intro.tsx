import Lottie from 'lottie-react';

import { animator } from '../../shared/utils/animator';
import { classnames } from '../../shared/utils/classnames';
import { ENV_DATA } from '../../shared/constants/environment';
import LOVE_ANIMATION from '../../shared/assets/love-animation.json';

import { HOME_MENU } from './constants';
import styles from './home-intro.module.scss';

export function HomeIntro() {
  return (
    <section
      id={HOME_MENU.HOME}
      className='w-11/12 relative h-screen flex flex-col items-center justify-center z-10'
    >
      <div className='flex flex-col justify-center items-center backdrop-blur-sm'>
        <h1
          className={classnames(
            'relative lato-black-italic',
            styles['home-intro__title'],
            animator({ name: 'fadeIn' })
          )}
        >
          FLIRTIO
        </h1>
        <h3 className={classnames('text-sm', animator({ name: 'fadeIn', delay: '1s' }))}>
          Is an AI for chat and date essayer than before!
        </h3>
        <span className='text-xs mt-4 opacity-70'>V {ENV_DATA.VERSION}</span>
      </div>

      <a href={`#${HOME_MENU.START}`} className='animate-bounce absolute bottom-20 z-10'>
        <img
          className='invert-0 dark:invert w-8'
          alt='Start'
          src='/images/down-arrow.png'
        />
      </a>
      <Lottie className='absolute bottom-20 z-0' animationData={LOVE_ANIMATION} />
    </section>
  );
}
