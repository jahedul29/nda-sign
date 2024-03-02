import React, { Component } from "react";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../assets/js/firebase.config";
import { Link, useNavigate } from "react-router-dom";


const registerEvent = async (userinfo) => {
  try {
    const docRef = await addDoc(collection(db, "ndasign"), userinfo);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const Register = () => {
  const [fName, setFname] = React.useState("");
  const [lName, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const navigate = useNavigate();

  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };

  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      first_name: fName,
      last_name: lName,
      email: email,
      password: password,
    };
    registerEvent(newUser).then((res) => {
      localStorage.setItem("userID", res);
      navigate("/createresume");
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="h3 font-weight-normal mb-5">Register</h1>
            <div className="form-group mb-4">
              <label htmlFor="name">First name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="Enter your first name"
                value={fName}
                onChange={handleFnameChange}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="name">Last name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Enter your lastname name"
                value={lName}
                onChange={handleLnameChange}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              style={{ borderRadius: "4px" }}
              className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
            >
              Register!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
