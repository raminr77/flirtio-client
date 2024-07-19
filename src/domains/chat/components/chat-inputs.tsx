import { FormEvent, useState } from 'react';

import { Chats } from '../index';

interface ChatInputsProps {
  onChange: (chats: Chats) => void;
}

export function ChatInputs({ onChange }: ChatInputsProps) {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>('');

  const scrollToEnd = () => {
    const { documentElement } = document;
    documentElement.scrollTop = documentElement.scrollHeight + 100;
  };

  const onGenerate = (event: FormEvent) => {
    event.preventDefault();
    onChange([
      {
        id: new Date().toISOString(),
        type: 'REQUEST',
        text,
        file
      },
      {
        id: new Date().toISOString(),
        type: 'RESPONSE',
        file: null,
        text: 'this is a test for AI response ...'
      }
    ]);
    // RESET
    setText('');
    setFile(null);
    scrollToEnd();
  };

  return (
    <div className='text-xs flex-col flex items-center justify-center gap-2 p-4 z-0 fixed bottom-3 w-11/12 max-w-3xl rounded-md backdrop-blur-sm dark:bg-black/30'>
      <div className='w-full flex items-center justify-center flex-col text-center rounded-md leading-8 py-3 text-slate-400 dark:text-slate-600 cursor-pointer dark:bg-gray-800 bg-slate-200 relative'>
        {file && (
          <button
            onClick={() => setFile(null)}
            className='absolute bg-red-600 top-5 right-5 rounded-md leading-8 px-3 text-white'
          >
            Remove
          </button>
        )}

        {file && (
          <img
            width={200}
            alt='PREVIEW'
            className='rounded'
            src={URL.createObjectURL(file)}
          />
        )}

        <label className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
          {file?.name
            ? `${file?.name} - (${(file.size / 1048576).toFixed(2)} MB)`
            : 'Upload Your Chat Or Profile Screenshot'}
          <input
            type='file'
            accept='image/*'
            className='opacity-0 absolute w-0 h-0 top-0'
            onChange={({ target }) => setFile((target.files as FileList)[0])}
          />
        </label>
      </div>
      <form className='w-full gap-2 flex items-center justify-center'>
        <input
          type='text'
          tabIndex={1}
          value={text}
          placeholder='More information ...'
          onChange={({ target }) => setText(target.value)}
          className='w-full leading-8 dark:bg-gray-800 bg-slate-200 outline-none px-3 py-1 rounded-md'
        />
        <button
          type='submit'
          onClick={onGenerate}
          className='bg-blue-500 text-white px-3 py-1 leading-8 rounded-md'
        >
          Generate
        </button>
      </form>
    </div>
  );
}
