import {createBrowserRouter} from 'react-router-dom'
import App from '../../App';
import Home from '../Home/Home';
import AddCoffee from '../AddCoffee';
import UpdateCoffee from '../UpdateCoffee';
import AuthContext from '../AuthProvider/AuthContextProvider';
import AuthContextProvider from '../AuthProvider/AuthContextProvider';
import Login from '../Login-register/Login';
import Register from '../Login-register/Register';

const router=createBrowserRouter([
    {
        path:'/',
        element: <AuthContextProvider><App /></AuthContextProvider>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/addCoffee',
                element: <AddCoffee/>
            },
            {
                path: '/update-coffee/:id',
                element: <UpdateCoffee/>,
                loader: ({params})=>fetch(`https://coffeeshop-backend-rose.vercel.app/coffee/${params.id}`)
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            }
        ]
    }
]);

export default router;