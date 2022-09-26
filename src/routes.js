import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard';
import AuditLogs from './pages/AuditLogs';
import BannedUsernames from './pages/BannedUsernames';
import Commands from './pages/Commands';
import Account from './pages/Account';
import NoSidebarLayout from './layouts/NoSidebarLayout';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'logs', element: <AuditLogs /> },
      { path: 'usernames/banned', element: <BannedUsernames /> },
      { path: 'commands', element: <Commands/>},
      { path: 'account', element: <Account/> }
    ]
  },
  {
    path: '/',
    element: <NoSidebarLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;