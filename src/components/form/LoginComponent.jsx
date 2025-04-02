import React from 'react'

function LoginComponent() {
  return (
    <div><div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
    <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center">
      {/* Illustration Section */}
      <div className="hidden lg:block w-full lg:w-1/2">
        <div className="flex justify-center">
          <img
            src=""
            alt="Illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>

      {/* Login Form Section */}
      <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6 lg:p-12">
        <a href="/" className="text-sm text-green-500 hover:underline mb-4 inline-block">
          &larr; Back to home
        </a>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/50x50"
            alt="Logo"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-gray-500 mb-6">Login to access your rean account</p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <div className="text-right mt-1">
              <a href="/forgot-password" className="text-sm text-green-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">Or login with</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button
          type="button"
          className="w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600 focus:outline-none"
        >
          <img
            src="https://via.placeholder.com/20x20"
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
      </div>
    </div>
  </div>
      
    </div>
  )
}

export default LoginComponent;
