import React from 'react';

function ServiceItem(props) {
  /* Router */

  /* State */
  const {
    serviceTitle,
    serviceDesc,
    buttonTitle = '둘러보기',
    icon = 1,
    toPath = '/',
  } = props;

  /* Hooks */

  /* Functions */

  /* Render */
  return (
    <div className="bg-slate-100 rounded-sm text-center p-5">
      <div className="flex flex-col h-full">
        <div className="grow mb-2">
          {/* Icon */}
          <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
            <svg
              className="w-12 h-12"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="icon1-a"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
              </defs>
              {/* ISSUE 고쳐야함 */}
              {icon === 1 && (
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="icon1-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#A5B4FC" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fillRule="nonzero" fill="none">
                    <path
                      d="M19.236 21.995h-3.333c-.46 0-.833.352-.833.786v9.428c0 .434.373.786.833.786h4.167V22.78c0-.434-.374-.786-.834-.786Z"
                      fill="#4F46E5"
                      opacity=".88"
                    />
                    <path
                      d="M34.234 20.073a2.393 2.393 0 0 0-.735-.116h-5v-2.609c0-3.325-2.157-4.297-3.298-4.347a.828.828 0 0 0-.611.24.888.888 0 0 0-.257.63v4.032L21 22.077v10.924h10.19c1.1.005 2.073-.744 2.392-1.842l2.308-7.826a2.711 2.711 0 0 0-.181-1.988 2.528 2.528 0 0 0-1.475-1.272Z"
                      fill="url(#icon1-a)"
                      transform="translate(-.93 -.005)"
                    />
                  </g>
                </svg>
              )}
              {icon === 2 && (
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="icon5-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#A5B4FC" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fillRule="nonzero" fill="none">
                    <path
                      d="M31.074 20.692a5.516 5.516 0 0 0-7.878-1.107c-.172.133-.311.293-.463.44-.106-.184-.196-.375-.324-.55a5.516 5.516 0 0 0-7.878-1.108c-2.49 1.932-3 5.56-1.14 8.103l7.142 9.207 9.402-6.882c2.49-1.931 3-5.56 1.139-8.103Z"
                      fill="#4F46E5"
                      opacity=".88"
                    />
                    <path
                      d="M20.353 2.998a5.516 5.516 0 0 0-7.955 0c-.152.156-.268.333-.398.5-.13-.167-.246-.344-.398-.5a5.516 5.516 0 0 0-7.955 0c-2.196 2.26-2.196 5.924 0 8.183L12 19.304l8.353-8.123c2.196-2.26 2.196-5.924 0-8.183Z"
                      fill="url(#icon5-a)"
                      transform="rotate(16 -34.482 60.533)"
                    />
                  </g>
                </svg>
              )}
              {icon === 3 && (
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="icon3-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#A5B4FC" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fillRule="nonzero" fill="none">
                    <circle fill="url(#icon3-a)" cx="30.5" cy="17.5" r="4.5" />
                    <circle
                      fill="#4F46E5"
                      opacity=".88"
                      cx="17.5"
                      cy="17.5"
                      r="4.5"
                    />
                    <circle
                      fill="#4F46E5"
                      opacity=".88"
                      cx="30.5"
                      cy="30.5"
                      r="4.5"
                    />
                    <circle fill="url(#icon3-a)" cx="17.5" cy="30.5" r="4.5" />
                  </g>
                </svg>
              )}
              {icon === 4 && (
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="icon7-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#A5B4FC" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g
                    transform="translate(-.186 -.042)"
                    fillRule="nonzero"
                    fill="none"
                  >
                    <circle fill="#554FE8" cx="20" cy="26.993" r="10" />
                    <circle fill="url(#icon7-a)" cx="25.122" cy="24" r="11" />
                    <path
                      fill="#6366F1"
                      opacity=".72"
                      d="m26.255 22.605-1.569-3.586-.922 3.804-3.735.327 3.26 2.195-.864 3.91 2.927-2.626 3.339 2.078-1.53-3.7 2.83-2.729z"
                    />
                  </g>
                </svg>
              )}
            </svg>
          </div>
          {/* Content */}
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {serviceTitle}
          </h3>
          <div className="text-sm">{serviceDesc}</div>
        </div>
        {/* Link */}
        <div>
          <a
            className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
            href={toPath}
          >
            {buttonTitle} &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
