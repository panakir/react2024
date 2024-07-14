import {
  createBrowserRouter,
  LoaderFunction,
  LoaderFunctionArgs,
} from "react-router-dom";
import { Fallback } from "../components/errorBoundary/Fallback";
import { App } from "../components/app/App";
import { NotFound } from "../components/not-found/NotFound";
import { Details } from "../components/details/Details";
import { getCharacter } from "./api";

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
