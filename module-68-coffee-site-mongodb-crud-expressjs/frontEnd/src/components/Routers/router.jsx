import {createBrowserRouter} from 'react-router-dom'
import App from '../../App';
import Home from '../Home/Home';
import AddCoffee from '../AddCoffee';
import UpdateCoffee from '../UpdateCoffee';

const router=createBrowserRouter([
    {
        path:'/',
        element: <App/>,
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
                path: '/updateCoffee',
                element: <UpdateCoffee/>
            }
        ]
    }
]);

export default router;