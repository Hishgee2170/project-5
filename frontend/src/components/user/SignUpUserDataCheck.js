// Import Yup
import * as yup from "yup";

// Define SignUpUserDataCheck schema
export const SignUpUserDataCheck = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(10).required(),
  rePassword: yup.string().min(6).max(10).required(),
});

// Your signup component
export default function signup() {
  // Rest of your component code...
}
