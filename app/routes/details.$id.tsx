import React from "react";
import { App } from "../../src/components/app/App";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";

const DetailsPage = (): React.ReactNode => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default DetailsPage;
