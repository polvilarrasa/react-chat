import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Chat from './pages/Chat.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import ProtectedBrowserRoute from 'components/ProtectedBrowserRouter.tsx';

const router = ProtectedBrowserRoute([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    protected:true,
  },
  {
    path: "/chat",
    element: <Chat />,
    protected:true,
  }
],<Login/>);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
