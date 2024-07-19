import { useState } from 'react';
import { HOME_MENU } from './constants';
import { classnames } from '../../shared/utils/classnames';

export function HomeTerms() {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section
      id={HOME_MENU.TERMS}
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
        <h3 className='lato-black-italic mb-2 text-2xl text-red-500'>FLIRTIO Terms</h3>
        <p>
          Welcome to FLIRTIO! By using FLIRTIO, you agree to the following terms and
          conditions:
        </p>
        <p>
          FLIRTIO uses OpenAI's API to analyze and provide suggestions for your chats and
          profile photos. Our goal is to help you improve your online dating
          conversations. We do not store any of your data. All photos and chat data
          uploaded are used solely for the purpose of providing the requested analysis and
          are deleted immediately after processing. We do not use your data for any other
          purposes beyond providing the analysis.
        </p>
        <p>
          Your privacy is important to us. Since we do not store or use your data, your
          information remains confidential and secure. FLIRTIO is intended to help improve
          your online dating conversations. We do not guarantee any specific outcomes.
          Users must be at least 18 years old to use FLIRTIO.
        </p>
        <p>
          FLIRTIO is provided "as is" without any warranties, express or implied. We are
          not responsible for any direct, indirect, incidental, or consequential damages
          resulting from your use of the service. We may update these terms from time to
          time. Any changes will be posted on this page, and your continued use of FLIRTIO
          signifies your acceptance of the updated terms.
        </p>
        <p>
          If you have any questions or concerns about these terms, please contact us at -
          info [at] raminrezaei.ir. By using FLIRTIO, you acknowledge that you have read,
          understood, and agree to these terms and conditions.
        </p>
        <p>Thank you for using FLIRTIO!</p>

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
