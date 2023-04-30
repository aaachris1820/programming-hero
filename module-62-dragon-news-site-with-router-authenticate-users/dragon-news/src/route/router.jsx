import App from "../App";
import {createBrowserRouter} from 'react-router-dom'
import AuthContextProvider from "../components/AuthContextProvider/AuthContextProvider";
import Home from "../components/main/Home";

const router=createBrowserRouter([
    {
        path:'/', 
        element: 
        <AuthContextProvider>
            <App></App>
        </AuthContextProvider>,
        children: [
            {
                path:'/', element: <Home/>
            }
        ]
    }
]);

export default router;