import { createBrowserRouter } from 'react-router-dom';

import Root from '../root/Root';
import Error from '../components/Error';
import Home from '../components/Home';
import Catalog from '../components/Catalog';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Faq from '../components/Faq';
import Login from '../components/Login';
import Signup from '../components/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);

export default router;
