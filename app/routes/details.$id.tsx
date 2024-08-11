import React from "react";
import { Footer } from "../../src/components/layouts/footer/Footer";
import { Header } from "../../src/components/layouts/header/Header";
import { Main } from "../../src/components/layouts/main/Main";
import { LoaderFunction } from "@remix-run/node";
import { getCharacterById, getCharacters } from "../api/api";
import { Character, ResponseFromApi } from "../../src/shared/types";
import { useLoaderData } from "@remix-run/react";

type DetailsLoaderProps = {
  response: ResponseFromApi;
  detailsResponse: Character;
};

export const loader: LoaderFunction = async ({
  params,
  request,
}): Promise<DetailsLoaderProps> => {
  const id = params.id ?? "";
  const url = new URL(request.url);
  const page = url.searchParams.get("page") ?? "1";
  const query = url.searchParams.get("search") ?? "";

  const detailsResponse = await getCharacterById(id);
  const response = await getCharacters(query, page);

  return { response, detailsResponse };
};

const DetailsPage = (): React.ReactNode => {
  const { response, detailsResponse } = useLoaderData<typeof loader>();
  return (
    <>
      <Header />
      <Main
        data={response}
        detailsData={detailsResponse}
      />
      <Footer />
    </>
  );
};

export default DetailsPage;
