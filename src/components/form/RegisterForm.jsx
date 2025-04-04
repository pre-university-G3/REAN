import { ErrorMessage, Field, Formik, Form } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import Loader from '../../components/loader/Loader';
import style from "./style.module.css";
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import image from '../../../public/img/Logo.svg'
import images from '../../../public/img/register.svg'
import Google from '../../../public/img/GoogleLogo.svg'


const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmedPassword: ""
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
        // validation on password input
        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{6})/,
        /^(?=.*[a-z])(?=.*[A-Z])(?=.{6})/,
        "Please use a strong password"
        // "Password must contain one uppercase, one lowercase, one number, and one specail case character"
    )
    .required("Password is required"),
    confirmedPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Password not match")
    .required("Confirm password is required")
});

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmedPassword, setShowconfirmedPassword] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleShowconfirmedPassword = () => {
        setShowconfirmedPassword(!showconfirmedPassword);
    }

    // handle for Register
    const handleSubmit = async (values) => {
        setLoading(true);

        try {
            const respone = await fetch("https://course-api.istad.co/api/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await respone.json();
            if (!respone.ok) {
                throw new Error(data.message || "Register failed.");
            }

            console.log("Register success", data);
            setLoading(false);

            if (data.access_token) {
                localStorage.setItem("token", data.access_token);
                navigate("/");
            }
        } catch (error) {
            console.log("Register Error: ", error);
            setLoading(false);
            
            if (error instanceof Error) {
                alert(error.message || "Oops, Something went wrong! Please try again.")
            } else {
                alert("Oops, Something went wrong! Please try again.")
            }
        }
    }

    if (loading) {
        return (
            <div className={style.container}>
                <Loader/>
            </div>
        );
    }

    return (
         <div className=" flex items-center  from-green-50 to-white   ">
                    <div className=" w-full ">
                    
                    <div className="w-full  bg-white  rounded-lg p-6  ">
                    <a href="/" className="text-sm text-green-500 hover:underline mb-4 inline-block">
                    &larr; Back to home
                  </a>
                  <div className="flex justify-content-between mt-10">
                   <div className=" w-full ">
                            <div className="mt-10 m-10">
                                <img
                                    src={images}
                                    alt="pic-register"
                                    className="w-[50%] ml-7"
                                    />
                                  </div>
                                </div> 
                    
                <main className={style.container} >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit} 
                    >
                        <Form className="bg-white border border-gray-300 p-5 rounded-lg w-full">
                        <img
                                src={image}
                                alt="Logo"
                                className="mx-auto mb-4"
                              />
                            <h1 className= "text-2xl font-bold text-gray-800 text-center {style.title}">Register</h1>
                            <p className="text-gray-500 mb-6 text-center mt-4">Register to access  all lessons with rean</p>

                            {/* Username Field */}
                        <div className=" flex  justify-content-lg-between space-x-5">
                             <div className="mb-5 w-60">
                                 <label className={style.label} htmlFor="username">
                                    Username
                                 </label>
                                <Field type="text" name="username" id="username"  placeholder="username"className={style.input} />
                                <ErrorMessage name="username" component="section" className={style.error} />
                            </div>
                            <div className=" flex  justify-content-lg-between space-x-7">
                             <div className="mb-5">
                                
                                 <div>
                                 <label className={style.label} htmlFor="gender">
                                    Gender
                                 </label>
                                    <div className="w-60">
                                    <select name="gender" id="gender" className=  { style.input}>
                                        <option value="" className="text-gray-800">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    </div>
                                 </div>
                                <ErrorMessage name="username" component="section" className={style.error} />
                            </div>
              </div>
                          
                        </div>
                        {/* Email Field */}
                        <div className="mb-5">
                                <label className={style.label} htmlFor="email">
                                  Email
                                 </label>
                                 <Field type="text" name="email" id="email"  placeholder="Email"  className={style.input} />
                                <ErrorMessage name="email" component="section" className={style.error} />
                             </div>
                            {/* Password Field */}
                            <div className="mb-5">
                                <label className={style.label} htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <Field
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        className={style.input}
                                    />
                                    <button
                                        type="button"
                                        onClick={handleShowPassword}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                                    >
                                        {showPassword ? <IoEyeSharp size={20} /> : <IoEyeOffSharp size={20} />}
                                    </button>
                                </div>
                                <ErrorMessage name="password" component="section" className={style.error} />
                            </div>
                            {/* Confirm Password Field */}
                     <div className="mb-5">
                        <label className={style.label} htmlFor="confirmedPassword">Confirm Password</label>
                         <div className="relative">
                            <Field
                                type={showconfirmedPassword ? "text" : "password"}
                                 name="confirmedPassword"
                                 id="confirmedPassword"
                                  placeholder="confirmedPassword"
                                className={style.input}
                                />
                            <button
                                type="button"
                                 onClick={handleShowconfirmedPassword}
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 '
                                >
                               {showconfirmedPassword ? <IoEyeSharp size={20}/> : <IoEyeOffSharp size={20} />}
                             </button>
                      </div>
                      <ErrorMessage name="confirmedPassword" component="section" className={style.error} />
                  </div>
        
                            {/* Submit Button */}
                            <button type="submit" className={style.button}>
                                Register
                            </button>
                             <div className="my-6 flex items-center">
                                        <hr className="flex-grow border-gray-300" />
                                        <span className="mx-4 text-sm text-gray-500">Or login with</span>
                                        <hr className="flex-grow border-gray-300" />
                                      </div>
                                      <button
                                        type="button"
                                        className="w-full flex items-center justify-center border border-gray-300 text-gray-800 py-2 px-4 rounded-md shadow  focus:outline-none"
                                      >
                                        <img
                                          src={Google}
                                          alt="Google Icon"
                                          className="w-5 h-5 mr-2"
                                        />
                                        Continue with Google
                                      </button>
                                      <p className="text-center text-sm text-gray-500 mt-4">
                                        Do not have an account?{' '}
                                        <a href="/login" className="text-green-500 hover:underline">
                                          Login
                                        </a>
                                      </p>
                        </Form>
                    </Formik>   
                </main>
                    </div>
                 </div>
            </div>
        
         </div>
            )
        }


