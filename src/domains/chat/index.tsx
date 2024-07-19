import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatHeader } from './components/chat-header';
import { ChatInputs } from './components/chat-inputs';
import { ROUTES } from '../../shared/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { classnames } from '../../shared/utils/classnames';
import { ChatResponseItem } from './components/chat-response-item';
import { userLogoutAction } from '../../shared/redux/user/user-slice';
import { userSelectors } from '../../shared/redux/user/user-selectors';

export type Chats = {
  id: string;
  text: string;
  file: File | null;
  type: 'RESPONSE' | 'REQUEST';
}[];

export function ChatPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(userSelectors.userInfo);

  const [chats, setChats] = useState<Chats>([]);

  const inputHandler = (items: Chats) => {
    // TODO: AI Request
    setChats([...chats, ...items]);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(userLogoutAction());
      navigate(ROUTES.HOME);
    }
  }, [isAuthenticated]);

  return (
    <div className='flex flex-col w-full justify-center items-center relative'>
      <ChatHeader />

      <section className='w-11/12 max-w-3xl flex flex-col p-5 gap-2 text-xs pt-20 mb-40'>
        {chats.map(({ id, file, type, text }, index) => (
          <div
            key={`${id}_${index}`}
            className={classnames('w-full flex items-center', {
              'justify-end': type === 'REQUEST'
            })}
          >
            <ChatResponseItem text={text} type={type} file={file} />
          </div>
        ))}
      </section>

      <br />
      <br />
      <br />

      <ChatInputs onChange={inputHandler} />
    </div>
  );
}
