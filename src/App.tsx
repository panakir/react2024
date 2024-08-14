import { Outlet } from "react-router-dom";
import { Header } from "./components/layouts/header/Header";
import { Footer } from "./components/layouts/footer/Footer";

export const App = (): React.ReactNode => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
