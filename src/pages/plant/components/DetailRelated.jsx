import React from 'react';
import { useNavigate } from 'react-router-dom';

import Related01 from '../../../images/related-product-01.jpg';
import Star from '../../../components/Star';
import { toolongText } from '../../../utils/Utils';

function DetailRelated(props) {
  /* Router */
  const navigate = useNavigate();

  /* State */
  const { plantList, star } = props;
  const { plant_id, plant_img, plant_nm, plant_desc, plant_fee } = plantList;

  /* Hooks */

  /* Functions */
  // 클릭 Item Detail로 이동
  const handleDetail = (e) => {
    e.preventDefault();
    navigate('/plant/' + plant_id);
  };

  /* Render */
  return (
    <li className="sm:flex items-center" onClick={handleDetail}>
      <a
        className="block mb-4 sm:mb-0 mr-5 md:w-32 xl:w-auto shrink-0"
        href="#0"
      >
        <img
          className="rounded-sm"
          src={plant_img}
          width="200"
          height="142"
          style={{ maxHeight: '142px', objectFit: 'scale-down' }}
          alt="img"
        />
      </a>
      <div className="grow">
        <a href="#0">
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {plant_nm}
          </h3>
        </a>
        <div className="text-sm mb-2">{toolongText(plant_desc, 200)}</div>
        {/* Rating and price */}
        <div className="flex flex-wrap items-center space-x-2">
          {/* Stars */}
          <Star star={star} />
          <div className="text-slate-400">·</div>
          {/* Price */}
          <div>
            <div className="inline-flex text-sm font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2 py-0.5">
              ₩ {plant_fee}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default DetailRelated;
