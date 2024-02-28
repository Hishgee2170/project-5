import * as yup from "yup";
export const newUserDataCheck = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(10).required(),
  rePassword: yup.string().min(6).max(10).required(),
});
