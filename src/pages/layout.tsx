import { Header } from "@/components/layouts/header/Header";

import { Footer } from "@/components/layouts/footer/Footer";
import { ErrorBoundary } from "@/components/layouts/errorBoundary/ErrorBoundary";
const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <>
      <ErrorBoundary fallback={<h1>Fail</h1>}>
        <Header />
        {children}
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default Layout;
