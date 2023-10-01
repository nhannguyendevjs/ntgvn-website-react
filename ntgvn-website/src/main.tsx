import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './style.scss';
import router from './router';
import GLOBAL_SETTINGS from './global-settings';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (GLOBAL_SETTINGS.production) {
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  root.render(
    <RouterProvider router={router} />
  );
}
