import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Form from './Form';
import i18n from './i18n.tsx';
import { I18nextProvider } from 'react-i18next';
import About from './About.tsx';
import Contact from './Contact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <Form />,

      },
      {
        path: "/About",
        element: <About />,
      },
      {

        path: "/Contact",
        element: <Contact />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>
);
