import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

import AuthImage from '../../images/auth-image.jpg';
import AuthDecoration from '../../images/auth-decoration.png';

import { useSession } from '../../utils/SessionManager';
import SignupType from './SignupType';
import SignupForm from './SignupForm';
import SignupResult from './SignupResult';
import AuthApi from '../../api/module/AuthAPI';

/* 
  Type : 0 - 일반 사용자 / 1 - 관리인 구분
  Step : 0-Signup 1-SignupForm 2-SignupResult */

// 회원가입 정보
const SignupInit = {
  type: '0',
  step: 0,
  check: false,
  email: '',
  name: '',
  pwd: '',
  wallet: '',
  buildingId: '',
  dong: '',
  ho: '',
};

function Signup() {
  /* Router */

  /* State */
  const [signupInfo, setSignupInfo] = useState(SignupInit);
  const { isSession, handleSession } = useSession();

  const signupValue = {
    signupInfo,
    setSignupInfo,
  };

  /* Hooks */
  useEffect(() => {
    if (isSession) {
      navigate('/');
      return;
    }
  }, [isSession]);

  /* Functions */
  const nextStep = () => {
    setSignupInfo({ ...signupInfo, step: signupInfo.step + 1 });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      switch (signupInfo.type) {
        case '0':
          console.log('일반인');
          console.log(signupInfo);
          const tenantInfo = {
            building_id: '10351335-4b10-4611-a11d-61bf2ac869f2',
            tenant_login_id: signupInfo.email,
            tenant_login_pw: signupInfo.pwd,
            tenant_nm: signupInfo.name,
            tenant_dong: signupInfo.dong,
            tenant_ho: signupInfo.ho,
            wallet_id: signupInfo.wallet,
          };

          console.log(tenantInfo);
          const tenantResult = await AuthApi.tenantSignup(tenantInfo);
          if (tenantResult) {
            nextStep();
            return true;
          } else {
            alert('입력값이 잘못되었습니다 !');
            navigate('/signup');
          }
          return false;
        case '1':
          console.log('대리인');
          const agentInfo = {
            building_id: '10351335-4b10-4611-a11d-61bf2ac869f2',
            agent_login_id: signupInfo.email,
            agent_login_pw: signupInfo.pwd,
            agent_nm: signupInfo.name,
            wallet_addr: signupInfo.wallet,
          };

          console.log(agentInfo);
          const agentResult = await AuthApi.agentSignup(agentInfo);
          if (agentResult) {
            nextStep();
            return true;
          } else {
            alert('입력값이 잘못되었습니다 !');
            navigate('/signup');
          }
          return false;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const functions = { handleSubmit, nextStep };

  /* Render */
  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <defs>
                      <linearGradient
                        x1="28.538%"
                        y1="20.229%"
                        x2="100%"
                        y2="108.156%"
                        id="logo-a"
                      >
                        <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                        <stop stopColor="#A5B4FC" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="88.638%"
                        y1="29.267%"
                        x2="22.42%"
                        y2="100%"
                        id="logo-b"
                      >
                        <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                        <stop stopColor="#38BDF8" offset="100%" />
                      </linearGradient>
                    </defs>
                    <rect fill="#6366F1" width="32" height="32" rx="16" />
                    <path
                      d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                      fill="#4F46E5"
                    />
                    <path
                      d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                      fill="url(#logo-a)"
                    />
                    <path
                      d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                      fill="url(#logo-b)"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 여기서 다름 */}
            {signupInfo.step === 0 && (
              <SignupType signupValue={signupValue} functions={functions} />
            )}
            {signupInfo.step === 1 && (
              <SignupForm signupValue={signupValue} functions={functions} />
            )}
            {signupInfo.step === 2 && (
              <SignupResult signupValue={signupValue} />
            )}
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
          <img
            className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block"
            src={AuthDecoration}
            width="218"
            height="224"
            alt="Authentication decoration"
          />
        </div>
      </div>
    </main>
  );
}

export default Signup;
