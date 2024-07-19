import { useState } from 'react';
import { HOME_MENU } from './constants';
import { classnames } from '../../shared/utils/classnames';

export function HomeAbout() {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section
      id={HOME_MENU.ABOUT}
      className='w-full h-screen flex flex-col items-center justify-center relative z-10'
    >
      <div
        className={classnames(
          'relative overflow-hidden w-11/12 max-w-3xl gap-y-3 shadow-md text-sm text-slate-700 dark:text-slate-200 leading-7 flex flex-col p-5 bg-slate-100/20 dark:bg-slate-900/40 backdrop-blur-sm rounded-md',
          {
            'max-h-96': !showMore
          }
        )}
      >
        <h3 className='lato-black-italic mb-2 text-2xl text-red-500'>About FLIRTIO</h3>
        <p>
          Welcome to FLIRTIO, your personal assistant for enhancing online dating
          conversations! Our mission is to help you navigate the often tricky world of
          online dating by providing you with tailored suggestions and advice for starting
          and continuing conversations.
        </p>
        <p>
          At FLIRTIO, we utilize the power of OpenAI's advanced language models to analyze
          your profile photos and chat messages. With our cutting-edge technology, we
          offer personalized insights and recommendations to increase your chances of
          making meaningful connections. Whether you're struggling with how to start a
          conversation or looking for ways to keep the dialogue engaging, FLIRTIO is here
          to help.
        </p>
        <p>
          We are committed to ensuring your privacy and security. We do not store any of
          your data; all photos and chat information you upload are used solely for the
          purpose of generating the advice you seek and are deleted immediately after
          processing. This means you can use our service with complete peace of mind,
          knowing that your personal information remains confidential.
        </p>
        <p>
          Our team at FLIRTIO is passionate about helping people connect in more
          meaningful ways. We believe that everyone deserves the chance to find a
          meaningful relationship, and we are dedicated to providing the tools and support
          to make that happen. Whether you're new to online dating or an experienced user,
          FLIRTIO aims to make your experience more enjoyable and successful.
        </p>
        <p>
          Thank you for choosing FLIRTIO. We look forward to helping you enhance your
          online dating experience and wish you the best of luck in your romantic
          endeavors! If you have any questions or need assistance, please don't hesitate
          to reach out to us at - info [at] raminrezaei.ir.
        </p>
        <p></p>

        {!showMore && (
          <div className='w-full min-h-40 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-50 dark:from-slate-800/80 to-transparent' />
        )}
      </div>
      <button
        className='text-xs mt-4'
        onClick={() => setShowMore((state: boolean) => !state)}
      >
        {`${showMore ? 'Close' : 'Read More ...'}`}
      </button>
    </section>
  );
}
