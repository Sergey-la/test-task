import { MAIN_ROUTE, LOGIN_ROUTE } from './utils/consts';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

export const routes = [
    {
        path: MAIN_ROUTE,
        Component: <Main />,
    },
    {
        path: LOGIN_ROUTE,
        Component: <Login />,
    },
];
