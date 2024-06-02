import * as Yup from "yup";

export function initialValues(name, lastname) {
  return {
    name,
    lastname,
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
  });
}
