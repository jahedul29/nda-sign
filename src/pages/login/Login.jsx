import React, { useState } from "react";
import FormInput from "../../components/form/formInput/formInput";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import { loginFormSchema } from "../../form-schema/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { db } from "../../assets/js/firebase.config";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import FormCheckbox from "../../components/form/formCheckbox/FormCheckbox";

export const Login = () => {
  const [isFormSubmitting, setIsformSubmitting] = useState(false);

  const handleLogin = async (data) => {
    console.log({ data });
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      setIsformSubmitting(true);
      const q = query(
        collection(db, "users"),
        where("email", "==", userInfo.email),
        where("password", "==", userInfo.password)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        toast.error("Email or password not valid");
      } else {
        toast.success("Email and password mathced");
      }
      setIsformSubmitting(false);
    } catch (e) {
      console.log({ e });
      setIsformSubmitting(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="content">
        <h1>Sign the documents</h1>
        <div className="inner-content">
          <h1>Welcome Back</h1>
          <Form
            resolver={yupResolver(loginFormSchema)}
            submitHandler={handleLogin}
          >
            <div className="input-container">
              <FormInput
                name={"email"}
                label={"Email"}
                placeholder={"Enter email"}
                type={"text"}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="input-container">
              <FormInput
                name={"password"}
                label={"Password"}
                placeholder={"Password"}
                type={"password"}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="agree-terms">
              <FormCheckbox name={"rememberMe"} label={"Remember me"} />
              <Link className="form-link" to="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <div className="input-container">
              <button type="submit" className="auth-button">
                {isFormSubmitting && <div className="loader"></div>}
                {isFormSubmitting ? "Loading..." : "Login"}
              </button>
            </div>
          </Form>
          <div className="already-have-account">
            <p>
              Dont have an account?{" "}
              <Link className="form-link" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="auth-banner.png" alt="" />
      </div>
    </div>
  );
};
