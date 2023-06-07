import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormManager from './FormManager';
import FormUser from './FormUser';

function SignupForm(props) {
  /* Router */
  /* State */
  const { signupValue, functions } = props;
  const { signupInfo } = signupValue;
  /* Hooks */
  /* Functions */

  /* Render */
  return (
    <div className="max-w-sm mx-auto px-4 py-8">
      <h1 className="text-3xl text-slate-800 font-bold mb-6">회원가입 ✨</h1>
      {/* Form */}
      {signupInfo.type === '0' ? (
        <FormUser signupValue={signupValue} functions={functions} />
      ) : (
        <FormManager signupValue={signupValue} functions={functions} />
      )}
      {/* Footer */}
      <div className="pt-5 mt-6 border-t border-slate-200">
        <div className="text-sm">
          41Room의 회원이신가요 ?{' '}
          <Link
            className="font-medium text-indigo-500 hover:text-indigo-600"
            to="/signin"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
