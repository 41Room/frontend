import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from 'partials/Sidebar';
import Header from 'partials/Header';

import { useSession } from 'utils/SessionManager';
import { getRandomInt } from 'utils';

const CommunityDetailPresenter = ({ community, thumbnail, userList }) => {
  /* Router */
  /* State */
  const { session, isSession } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [moreNum, setMoreNum] = useState(20);

  /* Functions */
  /* Hooks */
  /* Render */
  const contentRender = community?.community_content
    .split('\n')
    .map((line, idx) => {
      return (
        <p className="mb-1" key={idx}>
          {line}
        </p>
      );
    });

  const voteRender = community?.vote.map((item, idx) => {
    const { vote_id, vote_title, vote_description } = item;
    return (
      <ul className="space-y-5 my-6" key={vote_id}>
        <li className="flex items-start">
          <div className="grow">
            <div className="text-2xl font-semibold text-slate-800 mb-2">
              {vote_title}
            </div>
            <div className="italic">{vote_description}</div>
          </div>
        </li>
        <li className="flex items-start">
          <div className="italic w-full">
            <button className="w-full pt-5 pb-5 btn border-slate-200 hover:border-slate-300 text-indigo-500 bg-white">
              Yes
            </button>
          </div>
        </li>
        <li className="flex items-start">
          <div className="italic w-full">
            <button className="w-full pt-5 pb-5 btn border-slate-200 hover:border-slate-300 text-indigo-500 bg-white">
              No
            </button>
          </div>
        </li>
      </ul>
    );
  });

  const commentRender = community?.reply.map((item) => {
    const { reply_id, reply_content, tenant } = item;
    const { tenant_id, tenant_nm } = tenant;
    return (
      <li className="flex items-start" key={reply_id}>
        <a className="block mr-3 shrink-0" href="#0">
          <img
            className="rounded-full"
            src={`https://i.pravatar.cc/150?u=${tenant_id}`}
            width="32"
            height="32"
            alt="User 07"
          />
        </a>
        <div className="grow">
          <div className="text-sm font-semibold text-slate-800 mb-2">
            {tenant_nm}
          </div>
          <div className="italic">
            {reply_content.split('\n').map((line) => {
              return line;
            })}
          </div>
        </div>
      </li>
    );
  });

  const avatarListRender = userList.slice(0, moreNum).map((item) => {
    const { id, first_name, last_name, email } = item;
    return (
      <li key={id}>
        <div className="flex justify-between">
          <div className="grow flex items-center">
            <div className="relative mr-3">
              <img
                className="w-8 h-8 rounded-full"
                src={`https://i.pravatar.cc/150?u=${email}`}
                width="32"
                height="32"
                alt="User 08"
              />
            </div>
            <div className="truncate">
              <span className="text-sm font-medium text-slate-800">
                {first_name} {last_name}
              </span>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-500 rounded-full">
            <span className="sr-only">Menu</span>
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="2" />
              <circle cx="10" cy="16" r="2" />
              <circle cx="22" cy="16" r="2" />
            </svg>
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
            {/* Page content */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
              {/* Content */}
              <div>
                <div className="mb-6">
                  <Link
                    className="btn-sm px-3 bg-white border-slate-200 hover:border-slate-300 text-slate-600"
                    to="/community"
                  >
                    <svg
                      className="fill-current text-slate-400 mr-2"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                    >
                      <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
                    </svg>
                    <span>Back To Community</span>
                  </Link>
                </div>
                <header className="mb-4">
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
                    {community?.community_title}
                  </h1>
                  {/* <p>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts.
                  </p> */}
                </header>

                {/* Meta */}
                <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 mb-6">
                  {/* Author */}
                  <div className="flex items-center sm:mr-4">
                    <a className="block mr-2 shrink-0" href="#0">
                      <img
                        className="rounded-full"
                        src={`https://i.pravatar.cc/150?u=${session?.tenant_id}`}
                        width="32"
                        height="32"
                        alt="User 04"
                      />
                    </a>
                    <div className="text-sm whitespace-nowrap">
                      Communication by{' '}
                      <a className="font-semibold text-slate-800" href="#0">
                        {community?.tenant.tenant_nm}
                      </a>
                    </div>
                  </div>
                  {/* Right side */}
                  <div className="flex flex-wrap items-center sm:justify-end space-x-2">
                    {/* Tags */}
                    <div className="text-xs inline-flex items-center font-medium bg-white text-slate-600 rounded-full text-center px-2.5 py-1">
                      <svg
                        className="w-4 h-3 fill-slate-400 mr-2"
                        viewBox="0 0 16 12"
                      >
                        <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
                      </svg>
                      <span>Online Event</span>
                    </div>
                    <div className="text-xs inline-flex font-medium uppercase bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1">
                      Free
                    </div>
                  </div>
                </div>

                {/* Image */}
                <figure className="mb-6">
                  <img
                    className="w-full rounded-sm object-cover"
                    src={thumbnail}
                    // width="640"
                    // height="360"
                    alt="Meetup"
                  />
                </figure>

                {/* Post content */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
                    Communication Details
                  </h2>
                  {contentRender}
                </div>
                <hr className="my-6 border-t border-slate-200" />

                {/* Comments */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
                    Vote({community?.vote.length})
                  </h2>
                  {voteRender}
                </div>

                <hr className="my-6 border-t border-slate-200" />

                {/* Comments */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
                    Comments ({community?.reply?.length})
                  </h2>
                  <ul className="space-y-5 my-6">{commentRender}</ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* 1st block */}
                <div className="bg-white p-5 shadow-lg rounded-sm border border-slate-200 lg:w-72 xl:w-80">
                  <div className="space-y-2">
                    <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                      <svg
                        className="w-4 h-4 fill-current shrink-0"
                        viewBox="0 0 16 16"
                      >
                        <path d="m2.457 8.516.969-.99 2.516 2.481 5.324-5.304.985.989-6.309 6.284z" />
                      </svg>
                      <span className="ml-1">Attending</span>
                    </button>
                    {/* <button className="btn w-full border-slate-200 hover:border-slate-300 text-slate-600">
                      <svg
                        className="w-4 h-4 fill-rose-500 shrink-0"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                      </svg>
                      <span className="ml-2">Favorite</span>
                    </button> */}
                  </div>
                </div>

                {/* 2nd block */}
                <div className="bg-white p-5 shadow-lg rounded-sm border border-slate-200 lg:w-72 xl:w-80">
                  <div className="flex justify-between space-x-1 mb-5">
                    <div className="text-sm text-slate-800 font-semibold">
                      Attendees ({userList.length})
                    </div>
                    <a
                      className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                      href="#0"
                    >
                      View All
                    </a>
                  </div>
                  <ul className="space-y-3">
                    {avatarListRender}
                    <li>
                      <button
                        className="w-full btn border-slate-200 hover:border-slate-300 text-indigo-500"
                        onClick={() => {
                          setMoreNum(500);
                        }}
                      >
                        View More
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CommunityDetailPresenter;
