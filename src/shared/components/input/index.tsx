export const INPUT_CLASSES = 'focus:border-red-500 duration-300 w-full border-2 border-transparent outline-none leading-7 py-1 indent-2 rounded bg-white dark:bg-gray-500/20';

export const InputError = ({ error = '' }: { error?: string }) => {
  if (!error) return null;
  return <span className='text-xs text-red-500 px-1 my-1'>{error}</span>
};

export function Input({ error = '', type = 'text', placeholder = '', disabled = false, options = {} }){
  return (
    <div className='flex flex-col w-full'>
      <input
        {...options}
        disabled={disabled}
        className={INPUT_CLASSES} type={type} placeholder={placeholder}
      />
      <InputError error={error} />
    </div>
  )
}
