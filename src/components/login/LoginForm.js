import React from "react";
import { Formik, Form } from "formik";
import TextField from "../TextField";
import Card from "../Card";
import "./Login.scss";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";

function Login() {
  const validate = Yup.object({
    username: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters")
      .required("Password is required"),
  });

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        username: "admin",
        password: "password",
      }}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(login(values));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <div className="loginWrapper">
          <h1 className="formTitle">Login here</h1>
          <Form>
            <Card>
              <TextField
                label="Username"
                type="text"
                name="username"
                placeholder="Enter your username..."
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password..."
              />
              <button className="btn primaryBtn">Login</button>
            </Card>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Login;
