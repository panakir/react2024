import { ThemeProvider } from "@/context/ThemeContext";
import "@/main.scss";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Layout from "./layout";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
            {/* {children} */}
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
