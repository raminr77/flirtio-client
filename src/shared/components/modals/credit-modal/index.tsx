import { ChangeEvent, useState } from 'react';

import { INPUT_CLASSES } from '../../input';

export function CreditModal() {
  const [credit, setCredit] = useState<number>(0);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = Number(target.value);
    if (value < 0) {
      return;
    }
    setCredit(value);
  };

  const handleSubmit = () => {};

  return (
    <div className='flex flex-col text-sm'>
      <h3 className='mb-3 lato-bold-italic text-lg'>Credit</h3>
      <p>Buy credit for trying more ...</p>
      <div className='mt-4 flex items-center gap-2'>
        <input
          min={0}
          type='number'
          value={credit}
          onChange={handleChange}
          className={INPUT_CLASSES}
        />
        <span>x</span>
        <input className={INPUT_CLASSES} disabled value='10 SEK' />
        <span>=</span>
        <span className='whitespace-nowrap'>{Number(credit) * 10} SEK</span>
      </div>
      <button
        onClick={handleSubmit}
        className='w-full bg-red-500 text-white leading-7 py-1 mt-3 rounded'
      >
        Get Credit
      </button>
    </div>
  );
}
