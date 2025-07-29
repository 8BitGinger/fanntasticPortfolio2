import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: '/about',
      //   element: <About />,
      // },
      // {
      //   path: '/resume',
      //   element: <Resume />,
      // },
      // {
      //   path: '/projects',
      //   element: <Projects />,
      // },
      // {
      //   path: '/contact',
      //   element: <Contact />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
