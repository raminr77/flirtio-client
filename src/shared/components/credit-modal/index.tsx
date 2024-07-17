import { useState } from "react";

const INPUT_CLASSES = 'focus:border-red-500 duration-300 w-full border-2 border-transparent outline-none leading-7 py-1 indent-2 rounded bg-white dark:bg-gray-500/20';

export function CreditModal() {
    const [credit, setCredit] = useState<number>(0);

    const handleSubmit = () => {};

    return (
        <div className="flex flex-col text-sm">
            <h3 className="mb-3 lato-bold-italic text-lg">Credit</h3>
            <p>Buy credit for trying more ...</p>
            <div className="mt-4 flex items-center gap-2">
                <input
                    type="number"
                    value={credit}
                    className={INPUT_CLASSES}
                    onChange={({target}) => setCredit(+target.value < 100 ? +target.value : 100)}
                />
                <span>x</span>
                <input className={INPUT_CLASSES} disabled value='10 SEK' />
                <span>=</span>
                <span className="whitespace-nowrap">{Number(credit) * 10} SEK</span>
            </div>
            <button
                onClick={handleSubmit}
                className='w-full bg-red-500 text-white leading-7 py-1 mt-2 rounded'
            >
                Get Credit
            </button>
        </div>
    );
}
