import { PropsWithChildren } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const RootLayout = ({
  children,
}: PropsWithChildren): React.ReactNode => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
