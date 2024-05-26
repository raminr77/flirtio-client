import { notify } from "../../../shared/utils/notify";
import { animator } from "../../../shared/utils/animator";
import { classnames } from "../../../shared/utils/classnames";

export function ChatResponseItem({ text, type, file }: { text: string, file: File | null,  type: 'RESPONSE' | 'REQUEST' }) {
  const copy = () => {
    navigator.clipboard.writeText(text);
    notify.success({ message: 'Copied to clipboard!' });
  };

  return (
    <div onClick={copy} className={classnames('flex flex-col gap-2 cursor-pointer w-fit text-white rounded-xl p-2', {
        'bg-blue-500': type === 'RESPONSE',
        'bg-purple-500': type === 'REQUEST'
      }, animator({ name: 'fadeInUp' }))}
    >
      {file && <img width={150} alt='FILE' className='rounded-md' src={URL.createObjectURL(file)} />}
      {text}
    </div>
  );
}
