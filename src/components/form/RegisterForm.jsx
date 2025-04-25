import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import * as Yup from "yup";
import Loader from "../../components/loading/Loader";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import images from "../../../public/img/register.svg";
import { registerUser } from "../../api/register";
import { verifyUser } from "../../api/verify";
import ErrorModal from "../modal/ErrorModal";
import VerifyCode from "../modal/VerifyCode";

const initialValues = {
  name: "",
  gender: "",
  email: "",
  password: "",
  confirmedPassword: "",
  biography: name,
  role: "student",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.{6})/, "Please use a strong password")
    .required("Password is required"),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password not match")
    .required("Confirm password is required"),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmedPassword, setShowconfirmedPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState({
    open: false,
    title: "",
    description: "",
  });
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [verifyCode, setVerifyCode] = useState(0);
  const handleVerifyCode = (code) => {
    setVerifyCode(code);
    console.log("User entered code:", code);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowconfirmedPassword = () => {
    setShowconfirmedPassword(!showconfirmedPassword);
  };

  const handleSubmit = async (values) => {
    values.biography = values.name;
    console.log(values);
    setLoading(true);

    try {
      await registerUser(values);
      <VerifyCode onClick={handleVerifyCode} />;
      const data = await verifyUser(values.email, verifyCode);
      console.log(data);
      navigate("/login");
    } catch (error) {
      setErrorModal({
        open: true,
        title: "Register Error",
        description: error?.message || "Something went wrong! Please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen grid place-content-center bg-white text-[color:var(--color-primary)] dark:bg-[color:var(--color-dark-bg)] dark:text-[color:var(--color-dark-primary)]">
        <Loader />
      </div>
    );
  }

  return (
    <section className="flex flex-col justify-center px-5 md:px-[60px] lg:px-[120px] h-screen">
      <section className="flex items-center justify-between">
        <img
          src={images}
          alt="pic-register"
          className="w-[40%] hidden lg:flex"
        />

        <main className="w-full flex justify-center max-w-lg p-8 bg-white dark:bg-black shadow-small rounded-small">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-full">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-2">
                Register
              </h1>
              <p className="text-gray-500 dark:text-gray-300 mb-6 text-center">
                Register to access all lessons with Rean
              </p>

              <div className="flex flex-col gap-4 md:flex-row md:gap-6 mb-6">
                <div className="w-full">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-[color:var(--color-dark-primary)]/70"
                    htmlFor="name"
                  >
                    Username
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Username"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:bg-transparent dark:text-[color:var(--color-dark-primary)] h-[52px]"
                  />
                  <ErrorMessage
                    name="name"
                    component="section"
                    className="text-red-500 text-sm mt-3"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-[color:var(--color-dark-primary)]/70"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <Field
                    as="select"
                    name="gender"
                    id="gender"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:bg-transparent dark:text-[color:var(--color-dark-primary)] h-[52px]"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="section"
                    className="text-red-500 text-sm mt-3"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-[color:var(--color-dark-primary)]/70"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:bg-transparent dark:text-[color:var(--color-dark-primary)] h-[52px]"
                />
                <ErrorMessage
                  name="email"
                  component="section"
                  className="text-red-500 text-sm mt-3"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-[color:var(--color-dark-primary)]/70"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:bg-transparent dark:text-[color:var(--color-dark-primary)] h-[52px]"
                  />
                  <button
                    type="button"
                    onClick={handleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? (
                      <IoEyeSharp size={20} />
                    ) : (
                      <IoEyeOffSharp size={20} />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="section"
                  className="text-red-500 text-sm mt-3"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-[color:var(--color-dark-primary)]/70"
                  htmlFor="confirmedPassword"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Field
                    type={showconfirmedPassword ? "text" : "password"}
                    name="confirmedPassword"
                    id="confirmedPassword"
                    placeholder="Confirm Password"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:bg-transparent dark:text-[color:var(--color-dark-primary)] h-[52px]"
                  />
                  <button
                    type="button"
                    onClick={handleShowconfirmedPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showconfirmedPassword ? (
                      <IoEyeSharp size={20} />
                    ) : (
                      <IoEyeOffSharp size={20} />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="confirmedPassword"
                  component="section"
                  className="text-red-500 text-sm mt-3"
                />
              </div>

              <button type="submit" className="large-button w-full">
                Register
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-accent hover:underline">
                  Login
                </Link>
              </p>
            </Form>
          </Formik>
        </main>
      </section>
      {errorModal.open && (
        <ErrorModal
          title={errorModal.title}
          description={errorModal.description}
          onClose={() => setErrorModal({ ...errorModal, open: false })}
        />
      )}
      {showVerifyModal && (
        <VerifyCode
          onClick={(code) => {
            handleVerifyCode(code);
            setShowVerifyModal(false);
          }}
        />
      )}
    </section>
  );
}
