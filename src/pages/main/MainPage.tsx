import { Card } from "@/components/card/Card";
import { addCountries } from "@/store/slices/countrySlice";
import { RootState } from "@/store/store";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const MainPage = (): React.ReactNode => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const getAllCountries = async (): Promise<void> => {
      const allCountriesNames = [];
      const response = await (
        await fetch(" https://namaztimes.kz/ru/api/country?type=json")
      ).json();

      for (const key in response) {
        allCountriesNames.push(response[key]);
      }
      dispatch(addCountries(allCountriesNames));
    };
    getAllCountries();
  }, [dispatch]);

  const forms = useSelector((state: RootState) => state.form);
  return (
    <div className="dashboard">
      {forms.map((form, i) => {
        if (i === 0) {
          return (
            <Card
              form={form}
              key={i}
              last
            />
          );
        }
        return (
          <Card
            key={i}
            form={form}
          />
        );
      })}
    </div>
  );
};
