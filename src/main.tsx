import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ROUTES } from "./shared/constants/routes.ts";

// Pages
import { Error404 } from "./404.tsx";
import { Layout } from "./shared/layout";
import { HomePage } from "./domains/home";

// Styles
import './styles/main.scss';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
    errorElement: <Error404 />
  }
]);

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
