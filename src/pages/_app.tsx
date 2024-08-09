import { ThemeProvider } from "@/context/ThemeContext";
import "@/main.scss";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Layout from "./layout";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <ThemeProvider>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
