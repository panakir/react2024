import { Footer } from "@/components/layouts/footer/Footer";
import { Header } from "@/components/layouts/header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/main.scss";
import { store } from "@/store/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
