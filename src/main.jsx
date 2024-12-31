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
import LanguageSkill from './Components/LanguageSkill/LanguageSkill';
import Projects from './Components/Projects/Projects';
// import ExtraActivites from './Components/ExtraActivites/ExtraActivites';
import Contact from './Components/Contact/Contact';

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
        path: '/language-skills',
        element: <LanguageSkill></LanguageSkill>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      // {
      //   path: '/curricular-activities',
      //   element: <ExtraActivites></ExtraActivites>
      // },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
