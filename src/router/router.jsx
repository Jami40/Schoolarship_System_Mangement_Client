import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePage/HomePage';
import SignUp from '../SignUp_Login/SignUp';
import Login from '../SignUp_Login/Login';
import NotFound from '../Pages/NotFound/NotFound';
import Schoolarship from '../Pages/SchoolarshipPage/Schoolarship';
import ScholarshipDetails from '../Pages/ScholarshipDetails/ScholarshipDetails';
import Dashboard from '../Pages/Dashboard/Dashboard';
import UserDashboard from '../Pages/Dashboard/UserDashboard';
import MyProfile from '../Pages/Dashboard/MyProfile';
import MyApplication from '../Pages/Dashboard/MyApplication';
import MyReviews from '../Pages/Dashboard/MyReviews';
import PrivateRoute from '../routes/PrivateRoute';

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
            path:'/scholarships',
            element:<Schoolarship></Schoolarship>
        },
        {
            path:'/scholarship/:id',
            element: (
              <PrivateRoute>
                <ScholarshipDetails />
              </PrivateRoute>
            )
        },
        {
            path:'/dashboard',
            element: (
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            ),
            children: [
              {
                index: true,
                element: <Navigate to="/dashboard/my-profile" replace />
              },
              {
                path: 'my-profile',
                element: <MyProfile />
              },
              {
                path: 'my-applications',
                element: <MyApplication />
              },
              {
                path: 'my-reviews',
                element: <MyReviews />
              }
            ]
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
  {
    path: "*",
    element: <NotFound />
  }
]);
