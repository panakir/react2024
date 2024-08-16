import { PropsWithChildren } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export const RootLayout = ({
  children,
}: PropsWithChildren): React.ReactNode => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <main className="main">{children}</main>
      </Provider>
      <Footer />
    </>
  );
};
