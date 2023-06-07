import React from 'react';

function ContentItem(props) {
  /* Router */

  /* State */
  const { imgSrc, plantName, plantDesc, plantFee, star = 0, btnText } = props;

  /* Hooks */

  /* Functions */

  /* Render */
  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative">
          <img
            className="w-full"
            src={imgSrc}
            width="286"
            height="160"
            alt="img"
          />
        </div>
        {/* Card Content */}
        <div className="grow flex flex-col p-5">
          {/* Card body */}
          <div className="grow">
            {/* Header */}
            <header className="mb-2">
              <h3 className="text-lg text-slate-800 font-semibold mb-1">
                {plantName}
              </h3>
              <div className="text-sm">{plantDesc}</div>
            </header>
            {/* Rating and Price */}
            <div className="flex flex-wrap items-center justify-between mb-5">
              {/* Rating */}
              <div className="flex items-center space-x-2 mr-2">
                {/* Star */}
                <div className="flex items-center space-x-2 mr-2">
                  <div className="flex space-x-1">
                    <button>
                      <span className="sr-only">1 star</span>
                      <svg
                        className={
                          star >= 1
                            ? 'w-4 h-4 fill-current text-amber-500'
                            : 'w-4 h-4 fill-current text-slate-300'
                        }
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">2 stars</span>
                      <svg
                        className={
                          star >= 2
                            ? 'w-4 h-4 fill-current text-amber-500'
                            : 'w-4 h-4 fill-current text-slate-300'
                        }
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">3 stars</span>
                      <svg
                        className={
                          star >= 3
                            ? 'w-4 h-4 fill-current text-amber-500'
                            : 'w-4 h-4 fill-current text-slate-300'
                        }
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">4 stars</span>
                      <svg
                        className={
                          star >= 4
                            ? 'w-4 h-4 fill-current text-amber-500'
                            : 'w-4 h-4 fill-current text-slate-300'
                        }
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">5 stars</span>
                      <svg
                        className={
                          star >= 5
                            ? 'w-4 h-4 fill-current text-amber-500'
                            : 'w-4 h-4 fill-current text-slate-300'
                        }
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                  </div>
                  {/* Rate */}
                  <div className="inline-flex text-sm font-medium text-amber-600">
                    {star}
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="flex items-center space-x-2">
                <div className="inline-flex text-sm font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2 py-0.5">
                  ₩ {plantFee}
                </div>
              </div>
            </div>
          </div>
          {/* Card footer */}
          <div>
            <a
              className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white"
              href="#0"
            >
              시설 예약
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentItem;
