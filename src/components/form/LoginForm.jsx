import React, { useState } from 'react'
import style from "./style.module.css";
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import Loader from '../../components/loader/Loader';
import image from '../../../public/img/Logo.svg'
import images from '../../../public/img/Login.svg'
import Google from '../../../public/img/GoogleLogo.svg'


const initialValues = {
    email: "",
    password: "",
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        // Toggle password visibility
    };

    // handle for login
    const handleSubmit = async (values) => {
        setLoading(true);

        try {
            // const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
            const response = await fetch("https://course-api.istad.co/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Login failed! Check your credentials.");
            }

            console.log("Login Success:", data);
            setLoading(false);

            if (data.access_token) {
                localStorage.setItem("token", data.access_token); // Store token
                navigate("/"); // Redirect to home page
            }
        } catch (error) {
            console.error("Login Error:", error);
            setLoading(false);
            if (error instanceof Error) {
                alert(error.message || "Something went wrong! Please try again.");
            } else {
                alert("Something went wrong! Please try again.");
            }
        }
    };

    if (loading) {
        return (
            <div className={style.container}>
                <Loader />
            </div>
        );
    }


    return (
        <div className=" flex items-center  from-green-50 to-white   ">
            <div className="  w-full ">
            
            <div className="w-full  bg-white  rounded-lg p-6  ">
            <a href="/" className="text-sm text-green-500 hover:underline mb-4 inline-block">
            &larr; Back to home
          </a>
          <div className="flex justify-content-between mt-10">
           <div className=" w-full ">
                    <div className="mt-10 ">
                        <img
                            src={images}
                            alt="piclogin"
                            className="w-[60%]"
                            />
                          </div>
           </div> 
            
        <main className="w-[60%] {style.container} ">
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
                    <h1 className= "text-2xl font-bold text-gray-800 text-center {style.title}">Login</h1>
                    <p className="text-gray-500 mb-6 text-center mt-4">Login to access your rean account</p>
                    {/* Email Field */}
                    <div className="mb-5">
                        <label className={style.label} htmlFor="email"   >
                            Email
                        </label>
                        <Field type="text" name="email" id="email" placeholder="Email" className={style.input} />
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
                    <div className="text-right mt-1">
                                <a href="/forgot-password" className="text-sm text-gray-400 hover:underline">
                                Forgot Password?
                                </a>
                            </div>

                    {/* Submit Button */}
                    <button type="submit" className={style.button}>
                        Login
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
                                <a href="/register" className="text-green-500 hover:underline">
                                  Register
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



