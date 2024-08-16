import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router/router.tsx";
import { RouterProvider } from "react-router-dom";
import "@/assets/styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
