import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const Login = React.lazy(() => import('./views/Login'));
const Register = React.lazy(() => import('./views/Register'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Page404 = React.lazy(() => import('./views/Page404'));
const Page500 = React.lazy(() => import('./views/Page500'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Home', name: 'Home', component: Home },
  { path: '/Login', name: 'Dashboard', component: Login },
  { path: '/Register', name: 'Dashboard', component: Register },
  { path: '/Dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/404', name: 'Dashboard', component: Page404 },
  { path: '/500', name: 'Dashboard', component: Page500 },
];

export default routes;