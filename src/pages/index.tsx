import React from "react";
import { initialFetch } from "@/api/api";
import { Main } from "@/components/layouts/main/Main";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await initialFetch(context);
  return { props: { data } };
};

const Page = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): React.ReactNode => {
  return (
    <>
      <Main data={data} />
    </>
  );
};

export default Page;
