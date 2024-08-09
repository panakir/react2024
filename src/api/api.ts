import { GetServerSidePropsContext } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialFetch = async ({
  query,
}: GetServerSidePropsContext): Promise<void> => {
  const page = query.page || "";
  const searchTerm = query.search || "";
  const response = await fetch(`${BASE_URL}?search=${searchTerm}&page=${page}`)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error("Fetch is failed because " + error.message);
    });
  return response;
};

const detailsFetch = async ({
  query,
}: GetServerSidePropsContext): Promise<void> => {
  const { id } = query;
  const response = await (await fetch(`${BASE_URL}/${id}`)).json();
  return response;
};
export { initialFetch, detailsFetch };
