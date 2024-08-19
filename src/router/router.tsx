import { App } from "@/App";
import { ControlledFormPage } from "@/pages/controlledForm/ControlledFormPage";
import { UncontrolledFormPage } from "@/pages/uncontrolledForm/UncontrolledFormPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h2>Something went wrong!</h2>,
  },
  {
    path: "/controlled-form",
    element: <ControlledFormPage />,
    errorElement: <h2>Something went wrong!</h2>,
  },
  {
    path: "/uncontrolled-form",
    element: <UncontrolledFormPage />,
    errorElement: <h2>Something went wrong!</h2>,
  },
  {
    path: "*",
    element: <h2>This page is not found</h2>,
  },
]);
