import { boolean, mixed, number, object, ref, string } from "yup";
import { isValidType, isValidSize } from "./isValid";

export const formSchema = object().shape({
  name: string()
    .required("Name is required field")
    .matches(/^[A-Z][a-z]*$/, {
      message: "Name must be start with capital letter",
    }),
  age: number()
    .required()
    .typeError("Must be a number")
    .positive("Must be a positive number"),
  email: string()
    .required("Email is required field")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, {
      message: "Email must be like 'example@email.com'",
    }),
  password: string()
    .required("Password is required field")
    .matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]))/, {
      message:
        "Password must be at include 1 number, 1 uppercase letter, 1 lowercased letter, 1 special character",
    })
    .min(8, "Password`s length must be at least 8 characters"),
  passwordConfirm: string()
    .required("Confirm password is required field")
    .oneOf([ref("password")], "Passwords must match"),
  gender: string().oneOf(["man", "woman", "other"]).required(),
  accept: boolean().required().oneOf([true], "This field is required"),
  uploadImage: mixed<FileList>()
    .required()
    .test(
      "is-valid-type",
      " Allowed image`s types: jpg, jpeg, png",
      (files) => {
        if (files.length !== 1) {
          return false;
        }
        return files && isValidType(files[0].name);
      }
    )
    .test("is-valid-size", "Allow images with size less than 1Mb", (files) => {
      if (files.length !== 1) {
        return false;
      }
      return files && isValidSize(files[0].size);
    }),
});
