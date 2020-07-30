import Cover from '../views/Cover'
import Lose from '../components/Lose'
import Home from '../views/Home'
const minRoutes = [
  {
    path: '/',
    component: Cover,
    exact: true,
  },
  {
    path: '/404',
    component: Lose,
  },
]
const adminRoutes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
]
export { minRoutes, adminRoutes }
