import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import MainView from "views/MainView/MainView";
import PostView from "views/PostView/PostView";
import LoginView from "views/LoginView/LoginView";
import ProtectedRoute from "components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "login",
        element: <LoginView />,
      },
      {
        path: "home",
        element: (
          <ProtectedRoute>
            <MainView />
          </ProtectedRoute>
        ),
      },
      {
        path: "post/:id",
        element: (
          <ProtectedRoute>
            <PostView />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
