import { PropsWithChildren, useLayoutEffect } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { addCountries } from "@/store/slices/countrySlice";
import { useDispatch } from "react-redux";

export const RootLayout = ({
  children,
}: PropsWithChildren): React.ReactNode => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const getAllCountries = async (): Promise<void> => {
      const allCountriesNames = [];
      const response = await (
        await fetch("https://restcountries.com/v3.1/all")
      ).json();

      for (const key in response) {
        allCountriesNames.push(response[key].name.common);
      }
      localStorage.setItem("countryNames", JSON.stringify(allCountriesNames));
      dispatch(addCountries(allCountriesNames));
    };
    getAllCountries();
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
