import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import AcademicInfo from './Components/AcademicInfo/AcademicInfo';
import TechnicalSkill from './Components/TechnicalSkill/TechnicalSkill';
import Strengths from './Components/Strengths/Strengths';
import LanguageSkill from './Components/LanguageSkill/LanguageSkill';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/academic',
        element: <AcademicInfo></AcademicInfo>
      },
      {
        path: '/skills',
        element: <TechnicalSkill></TechnicalSkill>
      },
      {
        path: '/strengths',
        element: <Strengths></Strengths>
      },
      {
        path: '/language-skills',
        element: <LanguageSkill></LanguageSkill>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
