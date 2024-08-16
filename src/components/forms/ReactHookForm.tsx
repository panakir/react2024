import styles from "./form.module.scss";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { FormFields } from "@/core/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { InvalidField } from "../elements/invalidFormField/invalidField";
import { formSchema } from "@/utils/validateForm/validateSchema";

export const ReactHookForm = (): React.ReactNode => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<FormFields>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const handleInputFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (errors.uploadImage) {
      clearErrors("uploadImage");
    }
    const fileList = event.target.files;
    if (fileList) {
      const [file] = fileList;
      setValue("uploadImage", file);
    }
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    return data;
  };

  const onSubmitError: SubmitErrorHandler<FormFields> = (data) => {
    return data;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onSubmitError)}
      className={styles.form}
    >
      <div className={`${styles.form__field} ${styles.form__field_name}`}>
        <label htmlFor="username">name: </label>
        <input
          {...register("name", {
            required: true,
          })}
          className={styles.form__input}
          type="text"
          id="username"
        />
        {errors.name?.message ? (
          <InvalidField message={errors.name.message} />
        ) : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_age}`}>
        <label htmlFor="age">age: </label>
        <input
          {...register("age")}
          className={styles.form__input}
          type="number"
          id="age"
          min={1}
          defaultValue={1}
        />
        {errors.age ? (
          <InvalidField message={errors.age.message ?? ""} />
        ) : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_email}`}>
        <label htmlFor="email">email: </label>
        <input
          {...register("email")}
          className={styles.form__input}
          type="email"
          id="email"
        />
        {errors.email ? (
          <InvalidField message={errors.email.message ?? ""} />
        ) : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_password}`}>
        <label htmlFor="password">password: </label>
        <input
          {...register("password")}
          className={styles.form__input}
          type="password"
          autoComplete="password"
        />
        {errors.password ? (
          <InvalidField message={errors.password.message ?? ""} />
        ) : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_password}`}>
        <label htmlFor="passwordConfirm">confirm password: </label>
        <input
          {...register("passwordConfirm")}
          className={styles.form__input}
          type="password"
          id="confirmPassword"
          autoComplete="password"
        />
        {errors.passwordConfirm ? (
          <InvalidField message={errors.passwordConfirm.message ?? ""} />
        ) : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_gender}`}>
        <label htmlFor="gender">gender: </label>
        <select
          id="gender"
          {...register("gender")}
        >
          <option defaultValue="Choose your gender">Choose your gender</option>
          <option value="man">man</option>
          <option value="woman">woman</option>
          <option value="other">other</option>
        </select>
        {errors.gender ? (
          <InvalidField message={errors.gender.message ?? ""} />
        ) : null}
      </div>

      <div className={`${styles.form__field} ${styles.form__field_upload}`}>
        <label htmlFor="uploadImage">upload image:</label>
        <input
          onChange={(event) => handleInputFile(event)}
          className={styles.form__input}
          type="file"
          id="uploadImage"
        />
        {errors.uploadImage?.message ? (
          <InvalidField message={errors.uploadImage.message} />
        ) : null}
      </div>
      <div className={`${styles.form__field} ${styles.form__field_accept}`}>
        <input
          {...register("accept")}
          className={styles.form__input}
          type="checkbox"
          id="accept"
        />
        <label htmlFor="accept">accept Terms and Conditions agreement</label>
        {errors.accept ? (
          <InvalidField message={errors.accept.message ?? ""} />
        ) : null}
      </div>
      <button
        disabled={!isValid}
        className={styles.form__button}
        type="submit"
        value={"submit"}
      >
        submit
      </button>
    </form>
  );
};
