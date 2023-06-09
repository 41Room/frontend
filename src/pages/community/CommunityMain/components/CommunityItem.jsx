import React from 'react';
import { Link } from 'react-router-dom';

import { getRandomInt, loremIpsum } from 'utils';
const CommunityItem = ({ community, avatar }) => {
  /* Router */
  /* State */
  const { community_id, community_title, community_content, tenant_nm } =
    community;
  const content =
    community_content.length >= 180
      ? community_content.slice(0, 180) + '...'
      : community_content;
  const avatarList = [...new Array(3)];
  const plusNum = getRandomInt(1, 50);
  /* Functions */
  /* Hooks */

  /* Render */

  const avatarRandom = avatarList.map((_, idx) => {
    const num = getRandomInt();
    return (
      <img
        key={`${num}${idx}`}
        className="rounded-full border-2 border-white box-content"
        src={`https://i.pravatar.cc/150?u=${num}`}
        width="28"
        height="28"
        alt={`User ${num}`}
      />
    );
  });

  return (
    <article className="flex bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden">
      {/* Image */}
      <Link
        className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
        to={`/community/${community_id}`}
      >
        <img
          className="absolute object-cover object-center w-full h-full"
          src={`https://i.pravatar.cc/150?u=${community_id}`}
          width="220"
          height="236"
          alt="Meetup 01"
        />
        {/* Like button */}
        {/* <button className="absolute top-0 right-0 mt-4 mr-4">
          <div className="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
            <span className="sr-only">Like</span>
            <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
          </div>
        </button> */}
      </Link>
      {/* Content */}
      <div className="grow p-5 flex flex-col">
        <div className="grow">
          <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
            {/* Mon 27 Dec, 2021 */}
            {tenant_nm}
          </div>
          <Link className="inline-flex mb-2" to={`/community/${community_id}`}>
            <h3 className="text-lg font-bold text-slate-800">
              {community_title || 'Community Title'}
            </h3>
          </Link>
          <div className="text-sm">{content || loremIpsum}</div>
        </div>
        {/* Footer */}
        <div className="flex justify-between mt-3">
          {/* Tag */}
          {/* <div className="text-xs inline-flex items-center font-medium bg-slate-100 text-slate-600 rounded-full text-center px-2.5 py-1">
            <svg className="w-4 h-3 fill-slate-400 mr-2" viewBox="0 0 16 12">
              <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
            </svg>
            <span>Online Event</span>
          </div> */}
          {/* Avatars */}
          {avatar || (
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3 -ml-0.5">
                {avatarRandom}
                {/* <img
                className="rounded-full border-2 border-white box-content"
                src={UserImage01}
                width="28"
                height="28"
                alt="User 01"
              />
              <img
                className="rounded-full border-2 border-white box-content"
                src={UserImage04}
                width="28"
                height="28"
                alt="User 04"
              />
              <img
                className="rounded-full border-2 border-white box-content"
                src={UserImage05}
                width="28"
                height="28"
                alt="User 05"
              /> */}
              </div>
              <div className="text-xs font-medium text-slate-400 italic">
                +{plusNum}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default CommunityItem;
