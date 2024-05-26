import { HOME_MENU } from "./constants";

export function HomeTerms() {
  return (
    <section id={HOME_MENU.TERMS} className='w-full h-screen flex flex-col items-center justify-center relative'>
      <div
        className='w-11/12 max-w-3xl gap-y-3 shadow-md text-sm text-slate-700 dark:text-slate-200 leading-7 flex flex-col p-5 bg-slate-300/20 dark:bg-slate-500/20 backdrop-blur-sm rounded-md'
      >
        <h3 className='lato-black-italic mb-2 text-2xl dark:text-white'>FLIRTIO Terms</h3>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
          form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
          placeholder before the final copy is available.</p>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
          form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
          placeholder before the final copy is available.</p>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
          form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
          placeholder before the final copy is available.</p>
      </div>
    </section>
  )
}
