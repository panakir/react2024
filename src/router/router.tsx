import React from "react";
import { App } from "@/components/app/App";
import { Details } from "@/components/details/Details";
import { Fallback } from "@/components/layouts/errorBoundary/Fallback";
import { NotFound } from "@/components/layouts/not-found/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />) as React.ReactElement,
    errorElement: <Fallback />,
  },
  {
    path: "/page/:pageId",
    element: <App />,
    children: [
      {
        path: "details/:id",
        element: <Details />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
