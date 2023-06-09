import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthImage from '../images/auth-image.jpg';
import AuthDecoration from '../images/auth-decoration.png';
import MetamaskIcon from 'images/metamask.png';
import { useConnect, useDisconnect, useAccount } from 'wagmi';
import AuthApi from '../api/module/AuthAPI';
import { useSession } from '../utils/SessionManager';
import { useLoading } from '../hooks/useLoading';

const signinInit = {
  type: '0',
  email: '',
  password: '',
};

function Signin() {
  /* Router */
  /* State */
  const navigate = useNavigate();
  const { isSession, handleSession } = useSession();
  const [signinInfo, setSigninInfo] = useState(signinInit);
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  const { isConnected, address } = useAccount();
  const { handleLoadingTimer } = useLoading();

  /* Functions */

  // 로그인 Hash설정 필요함 ***************
  const handleSubmit = async (e) => {
    e.preventDefault();
    switch (signinInfo.type) {
      case '0':
        const tenantInfo = {
          tenant_login_id: signinInfo.email,
          tenant_login_pw: signinInfo.password,
        };
        const result = await AuthApi.tenantSignin(tenantInfo);
        if (result) {
          handleLoadingTimer(2000, () => {
            handleSession({ ...result, user_nm: result.tenant_nm });
            navigate('/');
          });
          return true;
        }
        return false;
      case '1':
        const agentInfo = {
          agent_login_id: signinInfo.email,
          agent_login_pw: signinInfo.password,
        };
        const agentResult = await AuthApi.agentSignin(agentInfo);
        if (agentResult) {
          handleSession({ ...agentResult, user_nm: agentResult.agent_nm });
          navigate('/');
        }
    }
  };

  // 로그인 타입 변경
  const handleType = (e) => {
    setSigninInfo({ ...signinInfo, type: e.target.id });
  };

  // 로그인 정보 State 변경
  const handleSigninInfo = (e) => {
    setSigninInfo({ ...signinInfo, [e.target.name]: e.target.value });
  };

  // MetaMask 로그인
  const handleMetamask = (e) => {
    e.preventDefault();
    connect({ connector: connectors[0] });
  };

  /**
   * 메타마스크로 로그인
   * --
   * @param {*} wallet_id
   * @returns
   */
  const handleAddressLogin = async (wallet_id) => {
    const result = await AuthApi.tenantSignin({ wallet_id });
    if (result) {
      handleLoadingTimer(3000, () => {
        handleSession({ ...result, user_nm: result.tenant_nm });
        navigate('/');
      });

      return true;
    }
    return false;
  };

  /* Hooks */
  useEffect(() => {
    if (isSession) {
      navigate('/');
      return;
    }
  }, [isSession]);

  useEffect(() => {
    if (!isConnected) {
      return;
    }
    handleAddressLogin(address);
  }, [isConnected]);

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

            <div className="max-w-sm mx-auto px-4 py-8">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">
                환영합니다! ✨
              </h1>
              {/* Form */}
              <form
                action={signinInfo.type === '0' ? '' : ''}
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="sm:flex space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
                  <label className="flex-1 relative block cursor-pointer">
                    <input
                      type="radio"
                      name="radio-buttons"
                      className="peer sr-only"
                      defaultChecked
                      id="0"
                      onClick={handleType}
                    />
                    <div className="h-full text-center bg-white px-4 py-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                      <svg
                        className="inline-flex w-10 h-10 shrink-0 fill-current mb-2"
                        viewBox="0 0 40 40"
                      >
                        <circle
                          className="text-indigo-100"
                          cx="20"
                          cy="20"
                          r="20"
                        />
                        <path
                          className="text-indigo-500"
                          d="m26.371 23.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 24 17v-1.828A4.087 4.087 0 0 0 20 11a4.087 4.087 0 0 0-4 4.172V17a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V27a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
                        />
                        <circle
                          className="text-indigo-100"
                          cx="20"
                          cy="20"
                          r="20"
                        />
                        <path
                          className="text-indigo-300"
                          d="m30.377 22.749-3.709-1.5a1 1 0 0 1-.623-.926v-.878A3.989 3.989 0 0 0 28.027 16v-1.828c.047-2.257-1.728-4.124-3.964-4.172-2.236.048-4.011 1.915-3.964 4.172V16a3.989 3.989 0 0 0 1.982 3.445v.878a1 1 0 0 1-.623.928c-.906.266-1.626.557-2.159.872-.533.315-1.3 1.272-2.299 2.872 1.131.453 6.075-.546 6.072.682V28a2.99 2.99 0 0 1-.182 1h7.119A.996.996 0 0 0 31 28v-4.323a1 1 0 0 0-.623-.928Z"
                        />
                        <path
                          className="text-indigo-500"
                          d="m22.371 24.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 20 18v-1.828A4.087 4.087 0 0 0 16 12a4.087 4.087 0 0 0-4 4.172V18a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V28a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
                        />
                      </svg>
                      <div className="font-medium text-slate-800 mb-1">
                        입주민
                      </div>
                      <div className="text-sm">세대 거주 사용자 로그인</div>
                    </div>
                    <div
                      className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
                      aria-hidden="true"
                    ></div>
                  </label>
                  <label className="flex-1 relative block cursor-pointer">
                    <input
                      type="radio"
                      name="radio-buttons"
                      className="peer sr-only"
                      id="1"
                      onClick={handleType}
                    />
                    <div className="h-full text-center bg-white px-4 py-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                      <svg
                        className="inline-flex w-10 h-10 shrink-0 fill-current mb-2"
                        viewBox="0 0 40 40"
                      >
                        <circle
                          className="text-indigo-100"
                          cx="20"
                          cy="20"
                          r="20"
                        />
                        <path
                          className="text-indigo-500"
                          d="m26.371 23.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 24 17v-1.828A4.087 4.087 0 0 0 20 11a4.087 4.087 0 0 0-4 4.172V17a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V27a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
                        />
                      </svg>
                      <div className="font-medium text-slate-800 mb-1">
                        관리인
                      </div>
                      <div className="text-sm">건물 및 시설 관리자 로그인</div>
                    </div>
                    <div
                      className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
                      aria-hidden="true"
                    ></div>
                  </label>
                </div>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="form-input w-full"
                      type="email"
                      name="email"
                      value={signinInfo.email}
                      onChange={handleSigninInfo}
                    />
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
                      name="password"
                      value={signinInfo.password}
                      onChange={handleSigninInfo}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <Link
                      className="text-sm underline hover:no-underline"
                      to="/reset-password"
                    >
                      비밀번호 찾기
                    </Link>
                  </div>
                  <button
                    className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                    // onClick={handleDisconnect}
                    type="submit"
                  >
                    로그인
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <Link
                  className="w-11/12 btn bg-indigo-500 hover:bg-indigo-600 text-white mx-3 mb-5"
                  onClick={handleMetamask}
                >
                  <img src={MetamaskIcon} className="w-6 mr-5" alt="img" />
                  MetaMask로 로그인
                </Link>
                <div className="text-sm">
                  41Room의 회원이 아니신가요?{'  '}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600"
                    to="/signup"
                  >
                    회원가입
                  </Link>
                </div>
              </div>
            </div>
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

export default Signin;
