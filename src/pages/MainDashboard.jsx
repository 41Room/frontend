import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import ServiceItem from './main/components/ServiceItem';

function MainDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          {/* 검색 공간 */}
          <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16 bg-indigo-500 overflow-hidden">
            {/* Glow */}
            <div className="absolute pointer-events-none" aria-hidden="true">
              <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="50%"
                    cy="50%"
                    fx="50%"
                    fy="50%"
                    r="50%"
                    id="ill-a"
                  >
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#FFF" stopOpacity="0" offset="100%" />
                  </radialGradient>
                </defs>
                <circle
                  style={{ mixBlendMode: 'overlay' }}
                  cx="588"
                  cy="650"
                  r="256"
                  transform="translate(-332 -394)"
                  fill="url(#ill-a)"
                  fillRule="evenodd"
                  opacity=".48"
                />
              </svg>
            </div>
            {/* Illustration */}
            <div className="absolute pointer-events-none" aria-hidden="true">
              <svg
                width="1280"
                height="361"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="ill2-b"
                  >
                    <stop stopColor="#A5B4FC" offset="0%" />
                    <stop stopColor="#818CF8" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="24.537%"
                    x2="50%"
                    y2="100%"
                    id="ill2-c"
                  >
                    <stop stopColor="#4338CA" offset="0%" />
                    <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
                  </linearGradient>
                  <path id="ill2-a" d="m64 0 64 128-64-20-64 20z" />
                  <path id="ill2-e" d="m40 0 40 80-40-12.5L0 80z" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g transform="rotate(51 -92.764 293.763)">
                    <mask id="ill2-d" fill="#fff">
                      <use xlinkHref="#ill2-a" />
                    </mask>
                    <use fill="url(#ill2-b)" xlinkHref="#ill2-a" />
                    <path
                      fill="url(#ill2-c)"
                      mask="url(#ill2-d)"
                      d="M64-24h80v152H64z"
                    />
                  </g>
                  <g transform="rotate(-51 618.151 -940.113)">
                    <mask id="ill2-f" fill="#fff">
                      <use xlinkHref="#ill2-e" />
                    </mask>
                    <use fill="url(#ill2-b)" xlinkHref="#ill2-e" />
                    <path
                      fill="url(#ill2-c)"
                      mask="url(#ill2-f)"
                      d="M40.333-15.147h50v95h-50z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="relative w-full max-w-2xl mx-auto text-center">
              <div className="mb-5">
                <h1 className="text-2xl md:text-3xl text-white font-bold">
                  👋 What Can We Help You Find?
                </h1>
              </div>
              <form className="relative">
                <label htmlFor="action-search" className="sr-only">
                  Search
                </label>
                <input
                  id="action-search"
                  className="form-input pl-9 py-3 focus:border-slate-300 w-full"
                  type="search"
                />
                <button
                  className="absolute inset-0 right-auto group"
                  type="submit"
                  aria-label="Search"
                >
                  <svg
                    className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Sections */}
            <div className="space-y-8">
              {/* 인기 시설 */}
              <div>
                <div className="mb-5">
                  <h2 className="text-xl text-slate-800 font-bold">
                    41Room의 기능을 만나보세요 !
                  </h2>
                </div>
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:sidebar-expanded:grid-cols-2 xl:sidebar-expanded:grid-cols-4 gap-6">
                  <ServiceItem
                    serviceTitle="시설"
                    serviceDesc="회원님이 속한 빌딩의 시설들을 둘러보세요 !"
                    icon={3}
                    toPath="/plant"
                  />

                  <ServiceItem
                    serviceTitle="커뮤니티"
                    serviceDesc="여러 회원님들과 소통을 나눠보세요 !"
                    icon={2}
                    toPath="/community"
                  />

                  <ServiceItem
                    serviceTitle="시설 예약"
                    serviceDesc="시설을 예약하고 즐겨보세요 !"
                    icon={4}
                  />

                  <ServiceItem
                    serviceTitle="사용자 정보"
                    serviceDesc="회원님의 정보를 열람 및 수정할 수 있어요 !"
                    icon={1}
                  />
                </div>
              </div>

              {/* Popular Guides */}
              <div>
                <div className="mb-5">
                  <h2 className="text-xl text-slate-800 font-bold">
                    Popular Guides
                  </h2>
                </div>
                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Item */}
                  <div className="w-full p-3 rounded-sm text bg-white border border-slate-200">
                    <div className="flex h-full">
                      {/* Icon */}
                      <svg
                        className="w-4 h-4 shrink-0 fill-indigo-400 mt-[3px] mr-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                      </svg>
                      <div className="flex flex-col h-full">
                        {/* Content */}
                        <div className="grow mb-2">
                          <div className="font-semibold text-slate-800 mb-1">
                            Documents For Business Verification
                          </div>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </div>
                        </div>
                        {/* Link */}
                        <div>
                          <a
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                            href="#0"
                          >
                            View -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="w-full p-3 rounded-sm text bg-white border border-slate-200">
                    <div className="flex h-full">
                      {/* Icon */}
                      <svg
                        className="w-4 h-4 shrink-0 fill-indigo-400 mt-[3px] mr-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                      </svg>
                      <div className="flex flex-col h-full">
                        {/* Content */}
                        <div className="grow mb-2">
                          <div className="font-semibold text-slate-800 mb-1">
                            Delayed Or Missing Payouts
                          </div>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </div>
                        </div>
                        {/* Link */}
                        <div>
                          <a
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                            href="#0"
                          >
                            View -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="w-full p-3 rounded-sm text bg-white border border-slate-200">
                    <div className="flex h-full">
                      {/* Icon */}
                      <svg
                        className="w-4 h-4 shrink-0 fill-indigo-400 mt-[3px] mr-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                      </svg>
                      <div className="flex flex-col h-full">
                        {/* Content */}
                        <div className="grow mb-2">
                          <div className="font-semibold text-slate-800 mb-1">
                            Update Existing Bank Account Information
                          </div>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </div>
                        </div>
                        {/* Link */}
                        <div>
                          <a
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                            href="#0"
                          >
                            View -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="w-full p-3 rounded-sm text bg-white border border-slate-200">
                    <div className="flex h-full">
                      {/* Icon */}
                      <svg
                        className="w-4 h-4 shrink-0 fill-indigo-400 mt-[3px] mr-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                      </svg>
                      <div className="flex flex-col h-full">
                        {/* Content */}
                        <div className="grow mb-2">
                          <div className="font-semibold text-slate-800 mb-1">
                            Close A Mosaic Account
                          </div>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </div>
                        </div>
                        {/* Link */}
                        <div>
                          <a
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                            href="#0"
                          >
                            View -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainDashboard;
