import { Card } from "@/components/card/Card";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export const MainPage = (): React.ReactNode => {
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
