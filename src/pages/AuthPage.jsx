import React from "react";
import { Link } from "react-router-dom";

export default function AuthPage({ children }) {
  return (
    <>
      <header className=" relative  flex justify-between items-center h-[72px] px-5 md:px-[60px] lg:px-[120px] bg-white w-full">
        <div className="flex items-center">
          {/* Back to Home Button */}
          <Link to="/" className="text-sm text-accent hover:underline">
            &larr; Back to home
          </Link>
        </div>
        <div className="flex items-center justify-end">
          {/* Logo space */}
          <div className="h-[40px] w-[120px] flex items-center justify-end">
            {/* Add your logo here, for example: */}
            <img src={"/icons/logo.svg"} alt="logo" className="h-full w-auto" />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
