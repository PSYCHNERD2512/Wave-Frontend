import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import Login from "../login";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

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
          path: "/Home/:username",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/profiles/:username",
      element: <ProfilePage />,
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <Login />,
    },
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
