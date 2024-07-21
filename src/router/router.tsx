import { App } from "@/components/app/App";
import { Details } from "@/components/details/Details";
import { Fallback } from "@/components/layouts/errorBoundary/Fallback";
import { NotFound } from "@/components/layouts/not-found/NotFound";
import { getCharacter } from "@/shared/api";
import {
  LoaderFunction,
  LoaderFunctionArgs,
  createBrowserRouter,
} from "react-router-dom";

const loaderDetails: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const { id } = params;
  const response = id && (await getCharacter(id));
  return response;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Fallback />,
  },
  {
    path: "/page/:pageId",
    element: <App />,
    children: [
      {
        path: "details/:id",
        element: <Details />,
        loader: loaderDetails,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
