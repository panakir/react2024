import { detailsFetch, initialFetch } from "@/api/api";
import { Main } from "@/components/layouts/main/Main";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const detailsData = await detailsFetch(context);
  const data = await initialFetch(context);
  return { props: { detailsData, data } };
};

const DetailsByID = ({
  detailsData,
  data,
}: InferGetServerSidePropsType<GetServerSideProps>): React.ReactNode => {
  return (
    <Main
      detailsData={detailsData}
      data={data}
    />
  );
};

export default DetailsByID;
