import React from "react";
import { App } from "../../src/components/app/App";
import { ThemeProvider } from "../../src/context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";

const MainPage = (): React.ReactNode => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

export default MainPage;
