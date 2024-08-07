import { Header } from "@/components/layouts/header/Header";

import { Footer } from "@/components/layouts/footer/Footer";
import { Main } from "@/components/layouts/main/Main";
const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <>
      <Header />
      <Main />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
