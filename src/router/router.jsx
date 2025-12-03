import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePage/HomePage';
import SignUp from '../SignUp_Login/SignUp';
import Login from '../SignUp_Login/Login';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element:<HomePage></HomePage>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>,
        },
        {
            path:'/login',
            element:<Login></Login>
        }

    ],
  },
]);
