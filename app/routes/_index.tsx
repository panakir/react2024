import React from "react";
import { Main } from "../../src/components/layouts/main/Main";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ResponseFromApi } from "../../src/shared/types";
import { getCharacters } from "../api/api";
import { Header } from "../../src/components/layouts/header/Header";
import { Footer } from "../../src/components/layouts/footer/Footer";

export const loader: LoaderFunction = async ({
  request,
}): Promise<ResponseFromApi> => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") ?? "1";
  const query = url.searchParams.get("search") ?? "";

  const response = await getCharacters(query, page);
  return response;
};

const MainPage = (): React.ReactNode => {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <Main data={data} />;
      <Footer />
    </>
  );
};

export default MainPage;
