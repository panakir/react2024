import { useRef, useState } from "react";
import styles from "./form.module.scss";
import { formSchema } from "@/utils/validateForm/validateSchema";
import { ValidationError } from "yup";
import { InvalidField } from "../elements/invalidFormField/invalidField";
import { useDispatch } from "react-redux";
import { addForm } from "@/store/slices/formSlice";
import { FormDataType } from "@/core/types";
import { convertToBase64 } from "@/utils/convertToBase64";
import { useNavigate } from "react-router-dom";
import { checkPassword } from "@/utils/checkPassword";
import { PasswordChecker } from "../elements/passwordChecker/PasswordChecker";

export const UncontrolledForm = (): React.ReactNode => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [color, setColor] = useState("");
  const [strength, setStrength] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const form = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      country: countryRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      passwordConfirm: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      accept: acceptRef.current?.checked,
      uploadImage: imageRef.current?.files,
    };

    const isValidForm = await formSchema.isValid(form);
    if (isValidForm) {
      const { uploadImage } = form;
      if (uploadImage && uploadImage[0] instanceof File) {
        const base64 = await convertToBase64(uploadImage[0]);
        const data: FormDataType = { ...form, uploadImage: base64 };
        dispatch(addForm(data));
        navigate("/");
      }
    }

    if (!isValidForm) {
      await formSchema.validate(form, { abortEarly: false }).catch((error) => {
        if (error instanceof ValidationError) {
          const allErrors: Record<string, string> = {};
          error.inner.forEach((e) => {
            if (e.path) {
              allErrors[e.path] = e.message;
              setErrors(allErrors);
            }
          });
        }
      });
    }
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { strength, color } = checkPassword(event.target.value);
    setStrength(strength);
    setColor(color);
  };

  return (
    <form
      className={styles.form}
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className={`${styles.form__field} ${styles.form__field_name}`}>
        <label htmlFor="username">name: </label>
        <input
          className={styles.form__input}
          type="text"
          id="username"
          ref={nameRef}
        />
        {errors.name ? <InvalidField message={errors.name} /> : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_age}`}>
        <label htmlFor="age">age: </label>
        <input
          className={styles.form__input}
          type="number"
          id="age"
          ref={ageRef}
        />
        {errors.age ? <InvalidField message={errors.age} /> : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_age}`}>
        <label htmlFor="country">Country:</label>
        <input
          className={styles.form__input}
          type="text"
          id="country"
          ref={countryRef}
        />
      </div>
      {errors.country ? <InvalidField message={errors.country} /> : null}
      <div className={`${styles.form__field} ${styles.form__field_email}`}>
        <label htmlFor="email">email: </label>
        <input
          className={styles.form__input}
          type="email"
          id="email"
          ref={emailRef}
        />
        {errors.email ? <InvalidField message={errors.email} /> : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_password}`}>
        <label htmlFor="password">password: </label>
        <input
          className={styles.form__input}
          type="password"
          id="password"
          ref={passwordRef}
          onChange={handlePassword}
          autoComplete="new-password"
        />
        <PasswordChecker
          strength={strength}
          color={color}
        />
        {errors.password ? <InvalidField message={errors.password} /> : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_password}`}>
        <label htmlFor="confirmPassword">confirm password: </label>
        <input
          className={styles.form__input}
          type="password"
          id="confirmPassword"
          ref={confirmPasswordRef}
          autoComplete="new-password"
        />
        {errors.passwordConfirm ? (
          <InvalidField message={errors.passwordConfirm} />
        ) : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_gender}`}>
        <label htmlFor="gender">Gender: </label>
        <select
          name="gender"
          id="gender"
          ref={genderRef}
        >
          <option defaultValue="true">Please choose gender</option>
          <option value="woman">woman</option>
          <option value="man">man</option>
          <option value="other">other</option>
        </select>
        {errors.gender ? <InvalidField message={errors.gender} /> : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_upload}`}>
        <label htmlFor="uploadImage">upload image:</label>
        <input
          className={styles.form__input}
          type="file"
          id="uploadImage"
          ref={imageRef}
        />
        {errors.uploadImage ? (
          <InvalidField message={errors.uploadImage} />
        ) : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_accept}`}>
        <input
          className={styles.form__input}
          type="checkbox"
          id="accept"
          ref={acceptRef}
        />
        <label htmlFor="accept">accept Terms and Conditions agreement</label>
        {errors.accept ? <InvalidField message={errors.accept} /> : null}
      </div>
      <button className={styles.form__button}>submit</button>
    </form>
  );
};
