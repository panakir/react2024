import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import React from "react";
import "../src/main.scss";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { ThemeProvider } from "../src/context/ThemeContext";

const Root = (): React.ReactNode => {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <Outlet />
          </ThemeProvider>
        </Provider>
        <Scripts />
      </body>
    </html>
  );
};

export default Root;
