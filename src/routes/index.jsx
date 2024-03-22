import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import Login from "../login";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import Signup from "../pages/signup";
const Routes = () => {
  const { token } = useAuth();

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/home/:username",
          element: <HomePage />,
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path: "/profiles/:username",
          element: <ProfilePage />,
        },

      ],
    },
    
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path:"/signup",
      element:<Signup/>
    }
  ];

  const routesForPublic = [];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
