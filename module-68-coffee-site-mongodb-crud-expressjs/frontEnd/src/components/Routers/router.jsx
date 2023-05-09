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
                path: '/update-coffee/:id',
                element: <UpdateCoffee/>,
                loader: ({params})=>fetch(`http://localhost:4000/coffee/${params.id}`)
            }
        ]
    }
]);

export default router;