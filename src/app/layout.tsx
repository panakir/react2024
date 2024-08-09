import { Header } from "@/components/layouts/header/Header";
import { Footer } from "@/components/layouts/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import StoreProvider from "./StoreProvider";
import "@/main.scss";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
};

export default Layout;
