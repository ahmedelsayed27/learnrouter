import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/home';
import Posts from './Pages/posts';
import About from './Pages/about';
import Notfound from './Pages/pagenotfound';
import PostDetails from './Pages/PostDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error </h1>,
  },
  {
    path: "/posts",
    element: <Posts />,
    errorElement: <h1>Error </h1>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <h1>Error about page </h1>,
  },
  {
    path: "/posts/:id",
    element: <PostDetails />,
    errorElement: <h1>Error in page </h1>,
  },
  {
    path: "*",
    element: <Notfound />,
    errorElement: <h1>Error </h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

