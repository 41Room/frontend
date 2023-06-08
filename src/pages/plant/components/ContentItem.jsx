import React from 'react';
import { useNavigate } from 'react-router-dom';
import Star from '../../../components/Star';
import { toolongText } from '../../../utils/Utils';

function ContentItem(props) {
  /* Router */
  const navigate = useNavigate();

  /* State */
  const {
    imgSrc,
    plantId = '',
    plantName = '',
    plantDesc = '',
    plantFee = 0,
    star = 0,
  } = props;

  /* Hooks */

  /* Functions */
  const handleDetail = (e) => {
    e.preventDefault();
    if (plantId === '') {
      return;
    } else {
      navigate('/plant/' + plantId);
    }
  };

  /* Render */
  return (
    <div
      className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden"
      onClick={handleDetail}
    >
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative">
          <img
            className="w-full"
            src={imgSrc}
            width="286"
            height="160"
            alt="img"
            style={{
              width: '348px',
              height: '200px',
              objectFit: 'scale-down',
            }}
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
              <div className="text-sm">{toolongText(plantDesc, 150)}</div>
            </header>
            {/* Rating and Price */}
            <div className="flex flex-wrap items-center justify-between mb-5">
              {/* Rating */}
              <div className="flex items-center space-x-2 mr-2">
                {/* Star */}
                <Star star={star} />
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
