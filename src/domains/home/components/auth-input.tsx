const renderError = (error: string = '') => {
  if (!error) return null;
  return <span className='text-xs text-red-500 px-1 my-1'>{error}</span>
};

const INPUT_CLASSES = 'focus:border-red-500 duration-300 w-full border-2 border-transparent outline-none leading-7 py-1 indent-2 rounded bg-slate-200/50 dark:bg-slate-300/20';

export function AuthInput({ error = '', type = 'text', placeholder = '', options = {} }){
  return (
    <div className='flex flex-col w-full'>
      <input
        {...options}
        className={INPUT_CLASSES} type={type} placeholder={placeholder}
      />
      {renderError(error)}
    </div>
  )
}
