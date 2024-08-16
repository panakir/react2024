export type FormFields = {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirm: string;
  uploadImage: Image;
  gender: "man" | "woman" | "other";
  accept: boolean;
};

export type Image = {
  name: string;
  size: number;
};
