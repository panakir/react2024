import {
  createBrowserRouter,
  LoaderFunction,
  LoaderFunctionArgs,
} from "react-router-dom";
import { Fallback } from "../components/errorBoundary/Fallback";
import { App } from "../components/app/App";
import { getCharacter } from "./api";
import { Details } from "../components/details/Details";

const characterLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const { id } = params;
  const character = id && (await getCharacter(id));
  return character;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Fallback />,
    children: [
      {
        path: "details/:id",
        loader: characterLoader,
        element: <Details />,
        index: true,
      },
    ],
  },
]);
