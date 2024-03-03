import * as yup from "yup";

const emailRegexPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const strongPasswordRegexPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
export const signupFormSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegexPattern, "Please enter a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      strongPasswordRegexPattern,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegexPattern, "Please enter a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      strongPasswordRegexPattern,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
});
