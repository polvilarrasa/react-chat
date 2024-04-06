import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Register from './pages/Register';
import Chat from './pages/Chat';
import ProtectedBrowserRoute from './components/router/ProtectedBrowserRouter';

const routes = [
  {
    path:"/*",
    protected:true,
    children:[
      {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <Register />,
        protected:true,
      },
      {
        path: "chat",
        element: <Chat />,
        protected:true,
      }
    ]
  },
  
];

const router = ProtectedBrowserRoute({
  routes,
  redirect:<Login/>
})



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
