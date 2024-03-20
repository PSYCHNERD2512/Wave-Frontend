import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../login";
import Wave from "../Wave";
import App from "../App";
const Routes= () =>{
    const {token}=useAuth();

    const routesForAuthenticatedOnly = [
        {
          path: "/",
          element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
          children: [
            {
              path: "/",
              element:<Login/>,
            },
            {
              path: "/Home/:username",
              element: <Wave/>,
            }, 
          ],
        },
        {
              path:"/profiles/:username",
              element : <App/>
            },
      ];

      const routesForNotAuthenticatedOnly = [
        
        {
          path: "/login",
          element: <Login/>,
        },
      ];

      const routesForPublic = [
      ]

      const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
      ]);
      return <RouterProvider router={router} />;
};

export default Routes;