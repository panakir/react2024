import { Main } from "@/components/layouts/main/Main";
import { ResponseFromApi } from "@/shared/types";
import { BASE_URL } from "@/shared/const";

export const metadata = {
  title: "React course 2024",
  description: "",
};

const getStaticProps = async (
  page: string,
  query: string
): Promise<ResponseFromApi> => {
  const response = await fetch(`${BASE_URL}?search=${query}&page=${page}`);
  return response.json();
};

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}): Promise<React.ReactElement> => {
  const { page, search } = searchParams;

  const data = await getStaticProps(page ?? 1, search ?? "");

  return (
    <>
      <Main data={data} />
    </>
  );
};

export default Page;
