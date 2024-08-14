import { App } from "@/App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/controlled-form",
        element: <h2>Controlled form</h2>,
      },
      {
        path: "/uncontrolled-form",
        element: <h2>Uncontrolled form</h2>,
      },
    ],
  },
]);
