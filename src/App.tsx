import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const App = (): React.ReactNode => {
  return (
    <>
      <Header />
      <h1>Main page</h1>
      <Outlet />
    </>
  );
};
