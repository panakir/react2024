export type FormFieldsType = {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirm: string;
  uploadImage: File;
  gender: "man" | "woman" | "other";
  accept: boolean;
};

export type FormDataType = {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirm: string;
  uploadImage: string;
  gender: "man" | "woman" | "other";
  accept: boolean;
};

export type CardPropsType = {
  form: FormDataType;
  last?: boolean;
};
