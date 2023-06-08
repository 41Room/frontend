import React, { useState, useEffect } from 'react';
import ProductImage from '../../../images/product-image.jpg';
import User03 from '../../../images/user-32-03.jpg';
import User04 from '../../../images/user-32-04.jpg';
import User05 from '../../../images/user-32-05.jpg';
import User07 from '../../../images/user-32-07.jpg';

import DetailReview from './DetailReview';
import Star from '../../../components/Star';
import DetailRelated from './DetailRelated';
import ReviewAPI from '../../../api/module/ReviewAPI';
import { usePlant } from '../../../utils/PlantManager';
import { Link } from 'react-router-dom';

function DetailItem(props) {
  /* Router */

  /* State */
  const {
    stateValue,
    star = (Math.random() * 3 + 2).toFixed(1),
    plant_id,
  } = props;
  // *ISSUE* plant_id 를 props로 받아야지 useEffect에서 사용가능( 왜? )
  const { plant_nm, plant_img, plant_desc } = stateValue;
  const [reviewList, setReviewList] = useState([]);
  const { plantList, setPlantList } = usePlant();

  /* Hooks */
  // 리뷰 리스트 가져오기
  useEffect(() => {
    const getReviewList = async () => {
      try {
        const result = await ReviewAPI.getReviewList(plant_id);

        if (result) {
          setReviewList(result);
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    };
    getReviewList();
  }, []);

  /* Functions */

  /* Render */
  return (
    <>
      <header className="mb-4">
        {/* 시설 이름 */}
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
          {plant_nm} ✨
        </h1>
      </header>

      {/* Meta */}
      <div className="space-y-3 sm:block sm:items-center sm:justify-between sm:space-y-0 mb-6">
        {/* Right side */}
        <div className=" items-center sm:justify-end space-x-4">
          {/* Stars */}
          <div className="w-full flex justify-between items-center space-x-2 mr-2">
            <Star star={star} />
          </div>
        </div>
      </div>

      {/* 시설 이미지 */}
      <figure className="mb-6">
        <img
          className="w-full rounded-sm"
          src={plant_img}
          width="640"
          height="360"
          style={{
            minHeight: '570px',
            maxHeight: '570px',
            objectFit: 'scale-down',
          }}
          alt="img"
        />
      </figure>

      {/* 시설 설명 */}
      <div>
        <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
          이 시설은 ?!
        </h2>
        <p className="mb-6">{plant_desc}</p>
      </div>

      <hr className="my-6 border-t border-slate-200" />

      {/* 리뷰 */}
      <div>
        <div className="flex flex-wrap items-center space-x-2 justify-between">
          <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
            이 시설의 리뷰들은 ?!
          </h2>
        </div>
        <ul className="space-y-5 my-6">
          {/* 리뷰 Item */}
          {reviewList.map((item, index) => {
            {
              if (index < 3) {
                return (
                  <DetailReview key={index} reviewInfo={item} star={star} />
                );
              }
            }
          })}
        </ul>
        <div className="text-center">
          <button className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500 hover:text-slate-600">
            리뷰 더보기
          </button>
        </div>
      </div>

      <hr className="my-6 border-t border-slate-200" />

      {/* 다른 시설 둘러보기 */}
      <div>
        <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
          다른 시설 둘러보기
        </h2>
        <ul className="space-y-8 sm:space-y-5 my-6">
          {/* 다른 시설 Item */}
          {plantList
            .filter((item) => Math.random() < 0.5)
            .slice(0, 3)
            .map((item, index) => {
              return <DetailRelated key={index} plantList={item} star={star} />;
            })}
        </ul>
        {/* Load More */}
        <Link to="/plant">
          <div className="text-center">
            <button className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500 hover:text-slate-600">
              시설 더보기
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default DetailItem;
