import { ROUTES } from './shared/constants/routes.ts';
import { ParticleScreen } from './shared/components/particle-screen/index.tsx';

export function Error404() {
  return (
    <div className='w-full flex items-center justify-center h-screen'>
      <div className='flex flex-col backdrop-blur-sm rounded-lg items-center justify-center bg-white/5 px-5 py-10 max-w-screen-sm w-11/12 z-10'>
        <div className='font-bold text-4xl text-red-600'>404</div>
        <br />
        <h1 className='font-bold text-lg'>Page Not Found!</h1>
        <p className='text-sm mt-2'>
          It happens! Now, let’s try to get you back on track.
        </p>
        <a
          href={ROUTES.HOME}
          className='text-xs mt-6 border-b cursor-pointer border-solid p-2 hover:border-red-600 hover:text-red-600'
        >
          Home Page
        </a>
      </div>
      <ParticleScreen />
    </div>
  );
}
