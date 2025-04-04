import { createBrowserRouter } from "react-router-dom";
import login from './front-end/login.jsx';

const router =createBrowserRouter ([
{
     path: '/login',
    element: <Login />,
}
   

])

export default router;