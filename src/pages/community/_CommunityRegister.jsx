import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import ProductImage01 from '../../images/related-product-01.jpg';
import ProductImage02 from '../../images/related-product-02.jpg';
import ProductImage03 from '../../images/related-product-03.jpg';

import AppImage01 from '../../images/applications-image-01.jpg';

function CommunityRegister() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="lg:relative lg:flex">
            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
              <div className="lg:max-w-[640px] lg:mx-auto">
                {/* Cart items */}
                <div className="mb-6 lg:mb-0">
                  <header className="mb-6">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
                      Register New plant ✨
                    </h1>
                  </header>
                  {/* Billing Information */}
                  <div>
                    <form>
                      <div className="space-y-4">
                        {/* 1st row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-name"
                            >
                              Name
                            </label>
                            <input
                              id="card-name"
                              className="form-input w-full"
                              type="text"
                              placeholder="Input Your Name"
                            />
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Address
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                              placeholder="Input Your Address"
                            />
                          </div>
                        </div>
                        {/* 3rd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-state"
                            >
                              Description
                            </label>
                            <textarea
                              id="card-state"
                              className="form-input w-full"
                              rows={10}
                              style={{ resize: 'none' }}
                              placeholder="Input Description"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="lg:sticky lg:top-16 bg-slate-50 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:w-[320px] xl:w-[352px] 2xl:w-[calc(352px+80px)] lg:h-[calc(100vh-64px)]">
                <div className="py-8 px-4 lg:px-8 2xl:px-12">
                  <div className="max-w-sm mx-auto lg:max-w-none">
                    <h2 className="text-2xl text-slate-800 font-bold mb-6">
                      Preview
                    </h2>
                    <div className="space-y-6">
                      {/* Order Details */}
                      {/* Card 1 */}
                      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden">
                        <div className="flex flex-col h-full">
                          {/* Image */}
                          <img
                            className="w-full"
                            src={AppImage01}
                            width="286"
                            height="160"
                            alt="Application 01"
                          />
                          {/* Card Content */}
                          <div className="grow flex flex-col p-5">
                            {/* Card body */}
                            <div className="grow">
                              {/* Header */}
                              <header className="mb-3">
                                <h3 className="text-lg text-slate-800 font-semibold">
                                  HTML, CSS, JavaScript - Build 6 Creative
                                  Projects
                                </h3>
                              </header>
                              {/* Rating and price */}
                              <div className="flex flex-wrap justify-between items-center mb-4">
                                {/* Rating */}
                                <div className="flex items-center space-x-2 mr-2">
                                  {/* Stars */}
                                  <div className="flex space-x-1">
                                    <button>
                                      <span className="sr-only">1 star</span>
                                      <svg
                                        className="w-4 h-4 fill-current text-amber-500"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                      </svg>
                                    </button>
                                    <button>
                                      <span className="sr-only">2 stars</span>
                                      <svg
                                        className="w-4 h-4 fill-current text-amber-500"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                      </svg>
                                    </button>
                                    <button>
                                      <span className="sr-only">3 stars</span>
                                      <svg
                                        className="w-4 h-4 fill-current text-amber-500"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                      </svg>
                                    </button>
                                    <button>
                                      <span className="sr-only">4 stars</span>
                                      <svg
                                        className="w-4 h-4 fill-current text-amber-500"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                      </svg>
                                    </button>
                                    <button>
                                      <span className="sr-only">5 stars</span>
                                      <svg
                                        className="w-4 h-4 fill-current text-slate-300"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                      </svg>
                                    </button>
                                  </div>
                                  {/* Rate */}
                                  <div className="inline-flex text-sm font-medium text-amber-600">
                                    4.2
                                  </div>
                                </div>
                                {/* Price */}
                                <div>
                                  <div className="inline-flex text-sm font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2 py-0.5">
                                    $89.00
                                  </div>
                                </div>
                              </div>
                              {/* Features list */}
                              <ul className="text-sm space-y-2 mb-5">
                                <li className="flex items-center">
                                  <svg
                                    className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-3"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                                  </svg>
                                  <div>23 hours on-demand video</div>
                                </li>
                                <li className="flex items-center">
                                  <svg
                                    className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-3"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M15 15V5l-5-5H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h12c.6 0 1-.4 1-1zM3 2h6v4h4v8H3V2z" />
                                  </svg>
                                  <div>37 articles</div>
                                </li>
                                <li className="flex items-center">
                                  <svg
                                    className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-3"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M13 7h2v6a1 1 0 01-1 1H4v2l-4-3 4-3v2h9V7zM3 9H1V3a1 1 0 011-1h10V0l4 3-4 3V4H3v5z" />
                                  </svg>
                                  <div>Access on mobile and TV</div>
                                </li>
                                <li className="flex items-center">
                                  <svg
                                    className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-3"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zm0 6c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zm-7-5c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                                  </svg>
                                  <div>8K+ active installations</div>
                                </li>
                              </ul>
                            </div>
                            {/* Card footer */}
                            <div>
                              <a
                                className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                                href="#0"
                              >
                                Buy Now
                              </a>
                            </div>
                          </div>
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

export default CommunityRegister;
