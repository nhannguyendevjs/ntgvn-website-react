import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </>,
    children: [
      {
        path: 'products',
        async lazy() {
          let Products = await import('./pages/products/Products');
          return {
            Component: Products.default
          };
        },
      },
      {
        path: 'pricing',
        async lazy() {
          let Pricing = await import('./pages/pricing/Pricing');
          return {
            Component: Pricing.default
          };
        },
      },
      {
        path: 'contact',
        async lazy() {
          let Contact = await import('./pages/contact/Contact');
          return {
            Component: Contact.default
          };
        },
      },
    ],
  },
]);

export default router;
