
import './index.css'
import App from './components/Main/App'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import LibraryPage from './components/pages/LibraryPage';
import DetailsPage from './components/pages/DetailsPage';

import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "books",
        element: <LibraryPage />,
      },
      {
        path: "books/:id",
        element: <DetailsPage />,
      },
    ],
  }, 
  
]);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);
