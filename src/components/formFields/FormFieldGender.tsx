export const FormFieldGender = ({
  name,
}: {
  name: string;
}): React.ReactNode => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <select
        name={name}
        id=""
      >
        <option value="man">man</option>
        <option value="woman">woman</option>
        <option value="other">other</option>
      </select>
    </>
  );
};
