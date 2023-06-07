import React from 'react';
import { Link } from 'react-router-dom';

import AuthImage from '../../images/auth-image.jpg';
import AuthDecoration from '../../images/auth-decoration.png';

function SignupResult() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <svg
            className="inline-flex w-16 h-16 fill-current mb-6"
            viewBox="0 0 64 64"
          >
            <circle className="text-emerald-100" cx="32" cy="32" r="32" />
            <path
              className="text-emerald-500"
              d="m28.5 41-8-8 3-3 5 5 12-12 3 3z"
            />
          </svg>
          <h1 className="text-3xl text-slate-800 font-bold mb-8">
            41Room의 회원이 되신걸 축하드립니다 🙌
          </h1>
          <Link
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
            to="/Signin"
          >
            로그인 하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupResult;
