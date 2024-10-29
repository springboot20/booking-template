import React, { useState } from "react";
import Input from "./Input";
import Icon from "../buttons/Icon";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { signInSchema } from "../schema/schema";
import MessageModal from "../messages/MessageModal";

import { useNavigate } from "react-router";
import Button from "../buttons/Button";

const Login = () => {
  let initialValues = {
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const { handleSubmit, handleChange, isSubmitting, errors, touched, handleBlur, values } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: async (values) => {
        if (values) {
          setFormSubmitted((prevState) => !prevState);
          await new Promise((resolve) => setTimeout(resolve, 5000));
          navigate("/home", { replace: true });
        }
      },
    });

  return (
    <div className="min-h-screen flex justify-center items-center mx-auto">
      <>
        <form onSubmit={handleSubmit} className="border max-w-lg w-full rounded-xl bg-white p-6">
          <legend className="my-2 text-center font-medium text-3xl block text-violet-700">
            Sign In
          </legend>
          <div className="border-t-2 border-gray-900/10 mt-3">
            <fieldset className="mb-5 mt-5">
              <label htmlFor="email" className="text-base font-medium leading-6 text-gray-600">
                Email
              </label>
              <div className="mt-2 relative">
                <Input
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="enter your email address"
                  className={`block w-full rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm font-normal sm:leading-6 ${
                    errors.email && touched.email ? "ring-red-600 ring-[0.15rem]" : ""
                  }`}
                />
                <Icon
                  icon={faEnvelope}
                  className={`absolute top-[50%] -translate-y-[50%] right-4 cursor-pointer h-4 w-4 text-gray-600`}
                />
              </div>
              {errors.email && touched.email && (
                <small className="text-base block text-red-600">{errors.email}</small>
              )}
            </fieldset>

            <fieldset className="mb-5">
              <label htmlFor="password" className="text-base font-medium leading-6 text-gray-600">
                Password
              </label>
              <div className="mt-2 relative">
                <Input
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  type={showPassword ? "text" : "password"}
                  placeholder="enter your password"
                  className={`block w-full rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm font-normal sm:leading-6 ${
                    errors.password && touched.password ? "ring-red-600 ring-[0.15rem]" : ""
                  }`}
                />
                <Icon
                  icon={showPassword ? faEyeSlash : faEye}
                  className={`absolute top-[50%] -translate-y-[50%] right-4 cursor-pointer h-4 w-4 ${
                    showPassword ? "text-gray-500" : "text-gray-600"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {errors.password && touched.password && (
                <small className="text-base block text-red-600">{errors.password}</small>
              )}
            </fieldset>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-md w-full bg-indigo-600 px-3 py-3 text-lg font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70 ${
              isSubmitting ? "cursor-progress" : "cursor-pointer"
            }`}
          >
            {isSubmitting ? "Login....." : "Login"}
          </button>

          <div className="flex justify-between items-center">
            <Button
              to="/forgotten"
              className="mt-4 text-base font-semibold text-gray-700 hover:text-soft-red transition-all ease active:text-soft-red"
            >
              Forget password ?
            </Button>
            <p className="mt-4 text-base font-medium">
              Don't have an account ?
              <Button
                to="/signup"
                className="text-soft-blue ml-2 hover:text-soft-red transition-all active:text-soft-red ease"
              >
                Sign Up
              </Button>
            </p>
          </div>
        </form>

        {formSubmitted && (
          <MessageModal
            msgTitle={"Login success"}
            message={"You have successfully logged in!"}
            checkClass={"checkmark"}
            isSubmitted={formSubmitted}
          />
        )}
      </>
    </div>
  );
};

export default Login;
