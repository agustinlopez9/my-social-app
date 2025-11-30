import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import MainView from "views/MainView/MainView";
import PostView from "views/PostView/PostView";

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
        path: "home",
        element: <MainView />,
      },
      {
        path: "post/:id",
        element: <PostView />,
      },
    ],
  },
]);
