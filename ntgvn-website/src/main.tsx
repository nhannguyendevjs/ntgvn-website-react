// import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.scss';
import App from './App';
import Products from './pages/products/Products';
import Pricing from './pages/pricing/Pricing';
import Contact from './pages/contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
