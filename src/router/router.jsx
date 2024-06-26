import { App } from "components/App";
import { Login } from "components/Authentication/Login";
import { Register } from "components/Authentication/Register";
import { UserMenu } from "components/Authentication/UserMenu";
import { Home } from "components/Home/Home";
import PrivateRoute from "components/PrivateRoute";
import RestrictedRouter from "components/RestrictedRout";

import { Statistics } from "components/Statistics/Statistics";
import { Training } from "components/Training/Training";
import TrainingRouter from "components/TrainingRouter";
import { createBrowserRouter } from "react-router-dom";

export const router =  createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
            children: [
               
                
                {
                    path: '/Home',
                    element: <PrivateRoute component={Home} redirecTo='/'/>
                },
                {
                    path: '/login',
                    element: <RestrictedRouter component={Login} redirecTo='/Home'/>
                },
                {
                   index: true,
                    element: <RestrictedRouter component={Register} redirecTo='/Home'/>
                },
                
               
                {
                    path: '/training',
                    element:<TrainingRouter component={Training} redirecTo='/statistics'/>
                },
                {
                    path: '/statistics',
                    element:<PrivateRoute component={Statistics} redirecTo='/'/>
                }
            ]
        }
    ],
    {
         basename:"/project-books",
    }
)




// {
//     path: '/Home',
//     element: <PrivateRoute component={Home} redirecTo='/login'/>
// },
// {
//     path: '/login',
//     element: <RestrictedRouter component={Login} redirecTo='/'/>
// },
// {
//     path: '/register',
//     element: <RestrictedRouter component={Register} redirecTo='/'/>
// }
// ,
// {
//     path: '/userMenu',
//     element:<PrivateRoute component={UserMenu} redirecTo='/login'/>
// },
// {
//     path: 'training',
//     element: <PrivateRoute component={Training} redirecTo='/login'/>
// },
// {
//     path: 'statistics',
//     element:<PrivateRoute component={Statistics} redirecTo='/login'/>
// }