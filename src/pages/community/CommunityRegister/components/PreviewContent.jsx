import React from 'react';

import { useSession } from 'utils/SessionManager';
import { loremIpsum } from 'utils';

const PreviewContent = ({ data }) => {
  /* Router */
  /* State */
  const { session } = useSession();
  const renderData = data?.community_content || loremIpsum;
  /* Functions */
  /* Hooks */
  /* Render */
  const contentRender = renderData.split('\n').map((line, idx) => {
    return (
      <p className="mb-6" key={idx}>
        {line}
      </p>
    );
  });

  return (
    <div>
      <header className="mb-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
          {data?.community_title || 'Community Title'}
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
              {session?.tenant_nm}
            </a>
          </div>
        </div>
      </div>

      {/* Image */}
      <figure className="mb-6">
        <img
          className="w-full rounded-sm object-cover"
          src={`https://i.pravatar.cc/150?u=${data?.community_id}`}
          width="640"
          height="360"
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

      {/* Comments */}
      {data?.vote ? (
        <div>
          <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
            Vote
          </h2>
          <ul className="space-y-5 my-6">
            <li className="flex items-start">
              <div className="grow">
                <div className="text-2xl font-semibold text-slate-800 mb-2">
                  {data?.vote.vote_title || 'Vote Title'}
                </div>
                <div className="italic">
                  {data?.vote.vote_description || loremIpsum}
                </div>
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
        </div>
      ) : null}

      <hr className="my-6 border-t border-slate-200" />
    </div>
  );
};

export default PreviewContent;
