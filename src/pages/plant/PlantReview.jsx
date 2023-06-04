import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import SettingsSidebar from '../../partials/settings/SettingsSidebar';
import FeedbackPanel from '../../partials/settings/FeedbackPanel';

function PlantReview() {
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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Plant Review ✨
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white shadow-lg rounded-sm mb-8">
              <div className="flex flex-col md:flex-row md:-mr-px">
                {/* <SettingsSidebar /> */}
                <div className="grow">
                  {/* Panel body */}
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-2xl text-slate-800 font-bold mb-4">
                        Give Feedback
                      </h2>
                      <div className="text-sm">
                        Our product depends on customer feedback to improve the
                        overall experience!
                      </div>
                    </div>

                    {/* Rate */}
                    <section>
                      <h3 className="text-xl leading-snug text-slate-800 font-bold mb-6">
                        How likely would you recommend us to a friend or
                        colleague?
                      </h3>
                      <div className="w-full max-w-xl">
                        <div className="relative">
                          <div
                            className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200"
                            aria-hidden="true"
                          ></div>
                          <ul className="relative flex justify-between w-full">
                            <li className="flex">
                              <button className="w-3 h-3 rounded-full bg-white border-2 border-slate-400">
                                <span className="sr-only">1</span>
                              </button>
                            </li>
                            <li className="flex">
                              <button className="w-3 h-3 rounded-full bg-white border-2 border-slate-400">
                                <span className="sr-only">2</span>
                              </button>
                            </li>
                            <li className="flex">
                              <button className="w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-500">
                                <span className="sr-only">3</span>
                              </button>
                            </li>
                            <li className="flex">
                              <button className="w-3 h-3 rounded-full bg-white border-2 border-slate-400">
                                <span className="sr-only">4</span>
                              </button>
                            </li>
                            <li className="flex">
                              <button className="w-3 h-3 rounded-full bg-white border-2 border-slate-400">
                                <span className="sr-only">5</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="w-full flex justify-between text-sm text-slate-500 italic mt-3">
                          <div>Bad</div>
                          <div>Perfect</div>
                        </div>
                      </div>
                    </section>

                    {/* Tell us in words */}
                    <section>
                      <h3 className="text-xl leading-snug text-slate-800 font-bold mb-5">
                        Tell us in words
                      </h3>
                      {/* Form */}
                      <label className="sr-only" htmlFor="feedback">
                        Leave a feedback
                      </label>
                      <textarea
                        id="feedback"
                        className="form-textarea w-full focus:border-slate-300"
                        rows="10"
                        placeholder="I really enjoy…"
                        style={{ resize: 'none' }}
                      />
                    </section>
                  </div>

                  {/* Panel footer */}
                  <footer>
                    <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                      <div className="flex self-end">
                        <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
                          Cancel
                        </button>
                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">
                          Submit
                        </button>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PlantReview;
