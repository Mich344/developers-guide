import { createBrowserRouter } from 'react-router-dom'

/* Components */
import { Render } from '../components/render'
import { Layout } from '../layout/layout'
export enum Router {
  // eslint-disable-next-line no-unused-vars
  INDEX = '/',
}

const router = createBrowserRouter([
  {
    path: Router.INDEX,
    element: <Layout />,
    errorElement: '',
    children: [
      {
        index: true,
        element: <Render />,
      },
    ],
  },
])

export default router
