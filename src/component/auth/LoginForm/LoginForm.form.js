import * as Yup from "yup";

export function initialValues() {
  return {
    username: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    username: Yup.string().required(true),
    password: Yup.string().required(true),
  });
}
