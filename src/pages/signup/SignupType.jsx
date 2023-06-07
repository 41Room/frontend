import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SignupType(props) {
  /* State */
  const { signupValue, functions } = props;
  const { signupInfo, setSignupInfo } = signupValue;

  const { nextStep } = functions;

  /* Hooks */
  useEffect(() => {
    return;
  }, []);

  /* Functions */
  const checkEssential = (e) => {
    signupInfo.check ? nextStep() : alert('필수 항목을 체크하세요.');
    return;
  };

  const handleType = (e) => {
    let typevalue = '';

    e.target.id === 'user' ? (typevalue = '0') : (typevalue = '1');

    setSignupInfo({ ...signupInfo, type: typevalue });
  };

  const handleCheck = () => {
    setSignupInfo({ ...signupInfo, check: !signupInfo.check });
  };

  /* Render */
  return (
    <div className="max-w-sm mx-auto px-4 py-8">
      <h1 className="text-3xl text-slate-800 font-bold mb-6">
        Create your Account ✨
      </h1>
      {/* Form */}
      <form>
        <div className="sm:flex space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
          <label className="flex-1 relative block cursor-pointer" id="user">
            <input
              type="radio"
              name="radio-buttons"
              id="user"
              className="peer sr-only"
              onClick={handleType}
              defaultChecked
            />
            <div className="h-full text-center bg-white px-4 py-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
              <svg
                className="inline-flex w-10 h-10 shrink-0 fill-current mb-2"
                viewBox="0 0 40 40"
              >
                <circle className="text-indigo-100" cx="20" cy="20" r="20" />
                <path
                  className="text-indigo-500"
                  d="m26.371 23.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 24 17v-1.828A4.087 4.087 0 0 0 20 11a4.087 4.087 0 0 0-4 4.172V17a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V27a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
                />
                <circle className="text-indigo-100" cx="20" cy="20" r="20" />
                <path
                  className="text-indigo-300"
                  d="m30.377 22.749-3.709-1.5a1 1 0 0 1-.623-.926v-.878A3.989 3.989 0 0 0 28.027 16v-1.828c.047-2.257-1.728-4.124-3.964-4.172-2.236.048-4.011 1.915-3.964 4.172V16a3.989 3.989 0 0 0 1.982 3.445v.878a1 1 0 0 1-.623.928c-.906.266-1.626.557-2.159.872-.533.315-1.3 1.272-2.299 2.872 1.131.453 6.075-.546 6.072.682V28a2.99 2.99 0 0 1-.182 1h7.119A.996.996 0 0 0 31 28v-4.323a1 1 0 0 0-.623-.928Z"
                />
                <path
                  className="text-indigo-500"
                  d="m22.371 24.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 20 18v-1.828A4.087 4.087 0 0 0 16 12a4.087 4.087 0 0 0-4 4.172V18a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V28a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
                />
              </svg>
              <div className="font-medium text-slate-800 mb-1">입주민</div>
              <div className="text-sm">세대 거주 사용자 로그인</div>
            </div>
            <div
              className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
              aria-hidden="true"
            ></div>
          </label>
          <label className="flex-1 relative block cursor-pointer" id="manager">
            <input
              type="radio"
              name="radio-buttons"
              id="manager"
              onClick={handleType}
              className="peer sr-only"
            />
            <div className="h-full text-center bg-white px-4 py-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
              <svg
                className="inline-flex w-10 h-10 shrink-0 fill-current mb-2"
                viewBox="0 0 40 40"
              >
                <circle className="text-indigo-100" cx="20" cy="20" r="20" />
                <path
                  className="text-indigo-500"
                  d="m26.371 23.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 24 17v-1.828A4.087 4.087 0 0 0 20 11a4.087 4.087 0 0 0-4 4.172V17a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V27a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
                />
              </svg>
              <div className="font-medium text-slate-800 mb-1">관리인</div>
              <div className="text-sm">건물 및 시설 관리자 로그인</div>
            </div>
            <div
              className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
              aria-hidden="true"
            ></div>
          </label>
        </div>
        <div className="flex items-center justify-between space-x-6 mb-8">
          <div>
            <div className="font-medium text-slate-800 text-sm mb-1">
              💸 (필수) 정보처리 약관에 동의하시겠습니까?
            </div>
            <div className="text-xs">
              41Room은 휴면고객 정보를 1년동안 보관 후 폐기합니다. 이 페이지는
              오경우, 정한호가 만들었음.
            </div>
          </div>
          <div className="flex items-center">
            <div className="form-switch">
              <input
                type="checkbox"
                id="switch"
                className="sr-only"
                onClick={handleCheck}
              />
              <label className="bg-slate-400" htmlFor="switch">
                <span className="bg-white shadow-sm" aria-hidden="true"></span>
                <span className="sr-only">Switch label</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link className="text-sm underline hover:no-underline" to="/">
            &lt; 뒤로가기
          </Link>
          <Link
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto"
            onClick={checkEssential}
          >
            계속 진행 &gt;
          </Link>
        </div>
      </form>
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

export default SignupType;
