"use client";

import { useContext } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

import AuthContext from "@/context/authContext";
import { LoginSchema } from "./schema";
import { Ilogin } from "./type";

export default function LoginView() {
  const { login } = useContext(AuthContext);
  const initialValues: Ilogin = { email: "", password: "" };

  const onLogin = async (values: Ilogin) => {
    try {
      const { data } = await axios.post(
        "https://sparklyjewel-us.backendless.app/api/data/user",
        {
          email: values.email,
          password: values.password,
        }
      );
      //   const { data } = await axios.get(
      //     `https://sparklyjewel-us.backendless.app/api/data/user?where=email%3D'${values.email}'%20and%20password%3D'${values.password}'`
      //   );
      //   if (data.length === 0) throw new Error("Invalid email or password");

      //   login({ email: data[0].email, password: data[0].password });
    } catch (err: any) {
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  const onRegister = async (values: Ilogin) => {
    try {
      const { data } = await axios.post(
        "https://sparklyjewel-us.backendless.app/api/data/user",
        {
          email: values.email,
          password: values.password,
        }
      );
      if (data.length === 0) throw new Error("Invalid email or password");

      login({ email: data[0].email, password: data[0].password });
    } catch (err: any) {
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center justify-items-center items-center gap-5">
      <p className="text-4xl">LOGIN FORM</p>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          onLogin(values);
        }}
      >
        {(props: FormikProps<Ilogin>) => {
          const { values, handleChange, touched, errors } = props;

          return (
            <Form>
              <div className="flex flex-col gap-4">
                <label>Email :</label>
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <div className="text-red-500">*{errors.email}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-4">
                <label>Password :</label>
                <Field
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <div className="text-red-500">*{errors.password}</div>
                ) : null}
              </div>
              <button className="standard-button" type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
