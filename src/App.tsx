import { RootLayout } from "./components/layouts/rootLayout/RootLayout";
import { MainPage } from "./pages/main/MainPage";

export const App = (): React.ReactNode => {
  return (
    <>
      <RootLayout>
        <MainPage />
      </RootLayout>
    </>
  );
};
