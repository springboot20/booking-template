import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "./Input";
import Button from "../buttons/Button";
import Icon from "../buttons/Icon";
import { faEnvelope, faEye, faEyeSlash, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { signUpSchema } from "../schema/schema";

const Signup = () => {
  let initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { handleChange, handleSubmit, handleBlur, values, touched, errors, isSubmitting } =
    useFormik({
      initialValues: initialValues,
      validateSchema: signUpSchema,
      onSubmit: async (values) => {
        if (values) {
          await new Promise((_resolve) => setTimeout(_resolve, 3000));
          navigate("/", { replace: true });
        }
      },
    });

  return (
    <div className="min-h-screen flex justify-center items-center mx-auto">
      <form
        className="login-form max-w-lg bg-white border w-full rounded-2xl bg-white p-7"
        onSubmit={handleSubmit}
      >
        <legend className="my-2 text-center font-medium text-3xl block text-violet-700">
          Sign up
        </legend>
        <div className="border-t-2 border-gray-900/10 mt-3">
          <fieldset className="mb-5 mt-5">
            <label htmlFor="username" className="text-base font-medium leading-6 text-gray-600">
              Username
            </label>
            <div className="mt-2 relative">
              <Input
                id="username"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
                type="text"
                placeholder="enter your username"
                className={`block w-full rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm font-normal sm:leading-6 ${
                  errors.username && touched.username ? "ring-red-600 ring-[0.15rem]" : ""
                }`}
              />
              <Icon
                icon={faUserAlt}
                className={`absolute top-[50%] -translate-y-[50%] right-4 cursor-pointer h-4 w-4 text-gray-600`}
              />
            </div>
            {errors.username && touched.username && (
              <small className="text-xl block text-red-600">{errors.username}</small>
            )}
          </fieldset>
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
              <small className="text-xl block text-red-600">{errors.email}</small>
            )}
          </fieldset>
          <fieldset className="mb-5 mt-5">
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
              <small className="text-xl block text-red-600">{errors.password}</small>
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
          {isSubmitting ? "Signing up....." : "Signup"}
        </button>

        <p className="mt-4 text-base font-medium">
          Already have an account ?
          <Button to="/login" className="text-soft-blue hover:text-soft-red transition-all ease ml-2">
            Sign In
          </Button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
