import React, { useState } from "react";
import "./style.css";
import FormInput from "../../components/form/formInput/formInput";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import { signupFormSchema } from "../../form-schema/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormCheckbox from "../../components/form/formCheckbox/FormCheckbox";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../assets/js/firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Signup = () => {
  const [isFormSubmitting, setIsformSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      setIsformSubmitting(true);
      const docRef = await addDoc(collection(db, "users"), userInfo);
      setIsformSubmitting(false);
      toast.success("Account created successfully");
      navigate("/login");
      return docRef.id;
    } catch (e) {
      setIsformSubmitting(false);
      toast.error(e.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="content">
        <h1>Sign the documents</h1>
        <div className="inner-content">
          <h1>Create your account</h1>
          <Form
            resolver={yupResolver(signupFormSchema)}
            submitHandler={handleSignup}
          >
            <div className="input-container">
              <FormInput
                name={"name"}
                label={"Name"}
                placeholder={"Enter your name"}
                type={"text"}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
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
            <div className="input-container">
              <FormInput
                name={"confirmPassword"}
                label={"Confirm password"}
                placeholder={"Password"}
                type={"password"}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="agree-terms">
              <FormCheckbox
                name={"agree"}
                label={"I agree to all Term, Privacy Policy and Fees"}
              />
            </div>
            <div className="input-container">
              <button
                // disabled={!formData.agree}
                type="submit"
                className="auth-button"
              >
                {isFormSubmitting && <div className="button-loader"></div>}
                {isFormSubmitting ? "Loading..." : "Sign up"}
              </button>
            </div>
          </Form>
          <div className="already-have-account">
            <p>
              Already have an account?{" "}
              <Link className="form-link" to="/login">
                Log in
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
