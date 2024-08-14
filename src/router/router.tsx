import { App } from "@/App";
import { ControlledForm } from "@/pages/controlledForm/ControlledForm";
import { UncontrolledForm } from "@/pages/uncontrolledForm/uncontrolledForm";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/controlled-form",
        element: <ControlledForm />,
      },
      {
        path: "/uncontrolled-form",
        element: <UncontrolledForm />,
      },
    ],
  },
]);
