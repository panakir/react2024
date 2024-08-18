export type FormFieldsType = {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirm: string;
  gender: NonNullable<"man" | "woman" | "other" | undefined>;
  accept: NonNullable<boolean | undefined>;
  uploadImage: FileList;
  country: string;
};

export type FormDataType = {
  name?: string;
  age?: number | string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  uploadImage?: string;
  gender?: string;
  accept?: boolean;
  country?: string;
};

export type CardPropsType = {
  form: FormDataType;
  last?: boolean;
};
