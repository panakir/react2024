import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/main.scss";
import { router } from "./router/router.tsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
