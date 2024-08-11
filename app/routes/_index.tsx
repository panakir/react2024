import React from "react";
import { Main } from "../../src/components/layouts/main/Main";
import { LoaderFunction } from "@remix-run/node";
import { BASE_URL } from "../constants";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async (): Promise<object> => {
  const response = await fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error("Fetching is failed: " + error.message);
    });

  return response;
};

const MainPage = (): React.ReactNode => {
  const data = useLoaderData<typeof loader>();

  return <Main data={data} />;
};

export default MainPage;
