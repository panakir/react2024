import { App } from "@/App";
import { ControlledFormPage } from "@/pages/controlledForm/ControlledFormPage";
import { UncontrolledFormPage } from "@/pages/uncontrolledForm/UncontrolledFormPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/controlled-form",
        element: <ControlledFormPage />,
      },
      {
        path: "/uncontrolled-form",
        element: <UncontrolledFormPage />,
      },
    ],
  },
]);
