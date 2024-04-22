import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/messages",
    element: (
      <div>
        Messages here! <Outlet></Outlet>
      </div>
    ),
    children: [
      {
        path: "/messages/:message_id",
        element: <div>Messages from a specific user here!</div>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
