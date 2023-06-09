import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Sidebar from 'partials/Sidebar';
import Header from 'partials/Header';

import { v4 } from 'uuid';
import CommunityItem from '../CommunityMain/components/CommunityItem';
import PreviewContent from './components/PreviewContent';
const d = new moment();
const nextDay = d.add(1, 'days');

const CommunityRegisterPresenter = ({ session, createCommunity }) => {
  /* Router */
  /* State */
  const initialCommunity = {
    community_title: '',
    community_content: '',
    vote: null,
    community_id: v4(),
    tenant_nm: session?.tenant_nm,
    tenant_id: session?.tenant_id,
  };
  const initialVote = {
    vote_title: '',
    vote_description: '',
    vote_start: d,
    vote_end: nextDay,
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [communityInfo, setCommunityInfo] = useState(initialCommunity);

  /* Functions */
  /**
   * 커뮤니티 폼 핸들러
   * --
   * @param {*} e
   */
  const handleCommunityInfo = (e) => {
    setCommunityInfo({ ...communityInfo, [e.target.name]: e.target.value });
  };

  /**
   * 투표 폼 핸들러
   * --
   * @param {*} e
   */
  const handleVoteInfo = (e) => {
    setCommunityInfo({
      ...communityInfo,
      vote: { ...communityInfo.vote, [e.target.name]: e.target.value },
    });
  };

  /**
   * 투표 추가
   * --
   * @param {*} e
   */
  const createVote = (e) => {
    e.preventDefault();
    setCommunityInfo({ ...communityInfo, vote: initialVote });
  };

  /**
   * 커뮤니티 등록 요청
   * --
   * @param {*} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createCommunity(communityInfo);
    if (result) {
      return true;
    } else {
      return false;
    }
  };
  /* Hooks */
  /* Render */

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
                      Register New Community ✨
                    </h1>
                  </header>
                  {/* Billing Information */}
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        {/* 1st row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-name"
                            >
                              Title
                            </label>
                            <input
                              id="card-name"
                              className="form-input w-full"
                              type="text"
                              placeholder="Input Title"
                              name="community_title"
                              value={communityInfo.community_title}
                              onChange={handleCommunityInfo}
                            />
                          </div>
                        </div>
                        {/* 2nd row */}
                        {/* <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
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
                        </div> */}
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
                              placeholder="Vote Description"
                              name="community_content"
                              value={communityInfo.community_content}
                              onChange={handleCommunityInfo}
                            />
                          </div>
                        </div>

                        {communityInfo.vote ? (
                          <>
                            <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                              <div className="flex-1">
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="card-name"
                                >
                                  Vote Subject
                                </label>
                                <input
                                  id="card-name"
                                  className="form-input w-full"
                                  type="text"
                                  placeholder="Input Vote Title"
                                  name="vote_title"
                                  value={communityInfo.vote?.vote_title}
                                  onChange={handleVoteInfo}
                                />
                              </div>
                            </div>
                            <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                              <div className="flex-1">
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="card-state"
                                >
                                  Vote Description
                                </label>
                                <textarea
                                  id="card-state"
                                  className="form-input w-full"
                                  rows={10}
                                  style={{ resize: 'none' }}
                                  placeholder="Input Description"
                                  name="vote_description"
                                  value={communityInfo?.vote?.vote_description}
                                  onChange={handleVoteInfo}
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="flex space-y-4 md:space-y-0 md:space-x-4 item-cener justify-center">
                            <button
                              className="w-12 h-12 pt-5 pb-5 btn border-slate-200 hover:border-slate-300 text-indigo-500 bg-white rounded-full"
                              onClick={createVote}
                            >
                              <svg
                                className="w-4 h-4 fill-current opacity-50 shrink-0"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                              </svg>
                              {/* <span className="hidden xs:block ml-2">Vote</span> */}
                            </button>
                          </div>
                        )}

                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <button
                            className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                            type="submit"
                          >
                            <svg
                              className="w-4 h-4 fill-current shrink-0"
                              viewBox="0 0 16 16"
                            >
                              <path d="m2.457 8.516.969-.99 2.516 2.481 5.324-5.304.985.989-6.309 6.284z" />
                            </svg>
                            <span className="ml-1">Regist</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="lg:sticky lg:top-16 bg-slate-50 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:w-[320px] xl:w-[352px] 2xl:w-[722px] lg:h-[calc(100vh-64px)]">
                <div className="py-8 px-4 lg:px-8 2xl:px-12">
                  <div className="max-w-sm mx-auto lg:max-w-none">
                    <h3 className="text-xl text-slate-800 font-bold mb-6">
                      List Preview
                    </h3>
                    <div className="grid  gap-6">
                      <CommunityItem community={communityInfo} avatar={' '} />
                    </div>
                    <hr className="my-6 border-t border-slate-200" />
                    <h3 className="text-xl text-slate-800 font-bold mb-6">
                      Detail Preview
                    </h3>
                    <div className="grid  gap-6">
                      <PreviewContent data={communityInfo} />
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
};

export default CommunityRegisterPresenter;
