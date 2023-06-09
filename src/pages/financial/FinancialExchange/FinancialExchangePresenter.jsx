import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PayBg from 'images/pay-bg.jpg';
import User from 'images/user-64-13.jpg';

function FinancialExchangePresenter({ session, thumbnail, submit }) {
  /* Router */
  /* State */
  const [exchange, setExchange] = useState(1000);
  const [toggle, setToggle] = useState(false);
  const won = exchange;
  const token = exchange / 1000;
  /* Functions */
  /**
   * 환전 금액 폼 입력
   * --
   * @param {*} e
   */
  const handleExhange = (e) => {
    const { name, value } = e.target;
    var val = 0;
    if (name === 'won') {
      val = value;
    } else {
      val = value * 1000;
    }
    setExchange(val);
  };

  /**
   * 엔터키 토글
   * @param {*} e
   */
  const handleToggle = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  /**
   * 환전 수치 조정
   * --
   */
  const handleCalculate = () => {
    setExchange(Math.round(exchange / 1000) * 1000);
    setToggle(true);
  };

  /**
   * 환전 요청
   * --
   * @returns
   */
  const handleSubmit = async () => {
    handleCalculate();
    if (!toggle) {
      return;
    }
    const result = submit();
    if (result) {
      return true;
    }
    return false;
  };

  /* Hooks */

  /* Render */
  return (
    <>
      <header className="bg-white border-b border-slate-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 -mb-px">
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

            <Link
              className="block rounded-full bg-slate-100 text-slate-500 hover:text-slate-600"
              to="/"
            >
              <span className="sr-only">Back</span>
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path
                  className="fill-current"
                  d="M15.95 14.536l4.242-4.243a1 1 0 111.415 1.414l-4.243 4.243 4.243 4.242a1 1 0 11-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 01-1.414-1.415l4.243-4.242-4.243-4.243a1 1 0 011.414-1.414l4.243 4.243z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="relative pt-8">
          <div
            className="absolute inset-0 bg-slate-800 overflow-hidden"
            aria-hidden="true"
          >
            <img
              className="object-cover h-full w-full filter blur opacity-10"
              src={PayBg}
              width="460"
              height="180"
              alt="Pay background"
            />
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
            <img
              className="rounded-t shadow-lg"
              src={thumbnail}
              width="460"
              height="180"
              alt="Pay background"
            />
          </div>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto">
          <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
            {/* Card header */}
            <div className="text-center mb-6">
              <div className="mb-2">
                <img
                  className="-mt-8 inline-flex rounded-full"
                  src={`https://i.pravatar.cc/150?u=${session?.tenant_id}`}
                  width="64"
                  height="64"
                  alt="User"
                />
              </div>
              <h1 className="text-xl leading-snug text-slate-800 font-semibold mb-2">
                Exchange 41Room Token 🔥
              </h1>
              <div className="text-sm">Exhange 41Room Token</div>
            </div>

            {/* Card form */}

            <div>
              <div className="space-y-4">
                {/* Card Number */}
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="card-nr"
                  >
                    Won <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="card-nr"
                    className="form-input w-full"
                    type="number"
                    placeholder="1,000￦"
                    name="won"
                    value={won}
                    onKeyUp={handleToggle}
                    onChange={handleExhange}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="card-nr"
                  >
                    41Room token <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="card-nr"
                    className="form-input w-full"
                    type="number"
                    placeholder="1Token"
                    name="token"
                    value={token}
                    onKeyUp={handleToggle}
                    onChange={handleExhange}
                  />
                </div>
              </div>
              {/* htmlForm footer */}
              <div className="mt-6">
                <div className="mb-4">
                  <button
                    className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                    onClick={handleSubmit}
                  >
                    {toggle ? 'Exchange' : 'Calculating'}
                  </button>
                </div>
                <div className="text-xs text-slate-500 italic text-center">
                  You'll be charged $253
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default FinancialExchangePresenter;
