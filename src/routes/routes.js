import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Error from '../components/Error';
import Home from '../components/Home';
import Catalog from '../components/Catalog';
import Pricing from '../components/Pricing';
import Blogs from '../components/Blogs';
import Faq from '../components/Faq';
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
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('blogs.json'),
      },
      {
        path: '/faq',
        element: <Faq />,
      },
    ],
  },
]);

export default router;
