import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Error from '../components/Error';
import Home from '../components/Home';
import Career from '../components/Career';
import TopicDetails from '../components/TopicDetails';
import Checkout from '../components/Checkout';
import Protected from './Protected';
import Pricing from '../components/Pricing';
import Blogs from '../components/Blogs';
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
        path: '/career',
        element: <Career />,
      },
      {
        path: '/topic/:id',
        element: <TopicDetails />,
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-iota.vercel.app/career/${params.id}`
          ),
      },
      {
        path: '/checkout/:id',
        element: (
          <Protected>
            <Checkout />
          </Protected>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-iota.vercel.app/career/${params.id}`
          ),
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
