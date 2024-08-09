import { Main } from "@/components/layouts/main/Main";
import { BASE_URL } from "@/shared/const";
import { Character, ResponseFromApi } from "@/shared/types";

type GetStaticPropsReturnType = {
  detailsData: Character;
  data: ResponseFromApi;
};
type ParamsPropType = {
  id: string;
};

export const metadata = {
  title: "React course 2024",
  description: "",
};

const getStaticProps = async (
  id: string,
  page: string,
  query: string
): Promise<GetStaticPropsReturnType> => {
  const detailsResponse = await fetch(`${BASE_URL}/${id}`);
  const detailsData = await detailsResponse.json();
  const dataResponse = await fetch(`${BASE_URL}?search=${query}&page=${page}`);
  const data = await dataResponse.json();
  return { detailsData, data };
};

const DetailsByID = async ({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string };
  params: ParamsPropType;
}): Promise<React.ReactNode> => {
  const { page, search } = searchParams;
  const { id } = params;
  const { detailsData, data } = await getStaticProps(id, page, search ?? "");
  return (
    <Main
      detailsData={detailsData}
      data={data}
    />
  );
};

export default DetailsByID;
