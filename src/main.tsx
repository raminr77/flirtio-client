import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PersistGate } from 'redux-persist/integration/react';

import { ROUTES } from './shared/constants/routes.ts';
import { store, persistor } from './shared/redux/store.ts';
import { ENV_DATA } from './shared/constants/environment.ts';

// Pages
import { Error404 } from './404.tsx';
import { Layout } from './shared/layout';
import { HomePage } from './domains/home';
import { ChatPage } from './domains/chat';

// Styles
import './styles/main.scss';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
    errorElement: <Error404 />
  },
  {
    path: ROUTES.CHAT,
    element: <ChatPage />,
    errorElement: <Error404 />
  }
]);

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <GoogleOAuthProvider clientId={ENV_DATA.GOOGLE_CLIENT_ID}>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
