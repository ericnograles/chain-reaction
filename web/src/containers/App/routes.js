import Home from '../Home';
import Sample from '../Sample';
import Login from '../Login';

export const ROUTE_CONFIG = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/sample',
    component: Sample
  }
];