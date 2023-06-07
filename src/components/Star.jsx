import React from 'react';

function Star(props) {
  /* Router */
  /* State */
  const { star } = props;
  /* Hooks */
  /* Functions */
  /* Render */
  return (
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
  );
}

export default Star;
