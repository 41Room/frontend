import React from 'react';
import { Link } from 'react-router-dom';

import AuthImage from '../../images/auth-image.jpg';
import AuthDecoration from '../../images/auth-decoration.png';

function SignupForm() {
  return (
    <div className="max-w-sm mx-auto px-4 py-8">
      <h1 className="text-3xl text-slate-800 font-bold mb-6">
        Create your Account ✨
      </h1>
      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input id="email" className="form-input w-full" type="email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input id="name" className="form-input w-full" type="text" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="role">
              Your Role <span className="text-rose-500">*</span>
            </label>
            <select id="role" className="form-select w-full">
              <option>Designer</option>
              <option>Developer</option>
              <option>Accountant</option>
            </select>
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              className="form-input w-full"
              type="password"
              autoComplete="on"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="mr-1">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-sm ml-2">Email me about product news.</span>
            </label>
          </div>
          <Link
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap"
            to="/"
          >
            Sign Up
          </Link>
        </div>
      </form>
      {/* Footer */}
      <div className="pt-5 mt-6 border-t border-slate-200">
        <div className="text-sm">
          Have an account?{' '}
          <Link
            className="font-medium text-indigo-500 hover:text-indigo-600"
            to="/signin"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;