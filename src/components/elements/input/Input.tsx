type InputPropsType = {
  type: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
};

export const Input = ({ type }: InputPropsType): React.ReactNode => {
  return <input type={type} />;
};
