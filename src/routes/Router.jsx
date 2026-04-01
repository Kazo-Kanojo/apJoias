import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../components/Login";
import Admin from "../components/Admin";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
  },
]);

export default router;
