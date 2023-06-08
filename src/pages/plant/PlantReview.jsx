import React, { useState, useEffect } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { PlantAPI } from 'api';
import { Link, useParams } from 'react-router-dom';
import { toolongText } from 'utils/Utils';
import TextArea from 'components/InputType/TextArea';
import InputRate from 'components/InputType/InputRate';

const reviewInit = {
  plant_id: '',
  plant_nm: '',
  plant_desc: '',
  star: 0,
  review: '',
};

function PlantReview() {
  /* Router */

  /* State */
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const params = useParams();
  const { plant_id } = params;
  const [reviewInfo, setReviewInfo] = useState(reviewInit);

  /* Hooks */
  useEffect(() => {
    const getDetail = async () => {
      try {
        const result = await PlantAPI.getPlant(plant_id);

        if (result) {
          setReviewInfo({
            ...reviewInfo,
            plant_id: result.plant_id,
            plant_nm: result.plant_nm,
            plant_desc: result.plant_desc,
          });
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    };

    getDetail();
  }, []);

  /* Functions */
  const handleSubmit = (e) => {
    if (reviewInfo.star === 0 || reviewInfo.review === '') {
      alert('모든 항목을 입력해주세요');
      return;
    }

    console.log('제출 데이타');
    console.log(reviewInfo);
  };

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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                리뷰 작성 ! ✨
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white shadow-lg rounded-sm mb-8">
              <div className="flex flex-col md:flex-row md:-mr-px">
                {/* <SettingsSidebar /> */}
                <div className="grow">
                  {/* Panel body */}
                  <div className="p-6 space-y-6">
                    <div>
                      <h2 className="text-2xl text-slate-800 font-bold mb-4">
                        {reviewInfo.plant_nm}
                      </h2>
                      <div className="text-sm">
                        {reviewInfo.plant_desc &&
                          toolongText(reviewInfo.plant_desc, 500)}{' '}
                      </div>
                    </div>

                    <hr className="my-6 border-t border-slate-200" />

                    {/* Rate */}
                    <section>
                      <h3 className="text-xl leading-snug text-slate-800 font-bold mb-6">
                        얼마나 최고였나요 ?!
                      </h3>
                      <InputRate
                        stateValue={reviewInfo}
                        setStateValue={setReviewInfo}
                      />
                    </section>

                    <hr className="my-6 border-t border-slate-200" />

                    {/* Tell us in words */}
                    <section>
                      <h3 className="text-xl leading-snug text-slate-800 font-bold mb-5">
                        마음껏 작성해주세요!
                      </h3>
                      {/* Form */}
                      <TextArea
                        Name="욕설, 모욕 및 비방 글은 판,검사님과의 면담을 초래합니다..."
                        inputName="review"
                        placeholder="여러분의 경험을 공유해주세요 !"
                        stateValue={reviewInfo}
                        setStateValue={setReviewInfo}
                      />
                    </section>
                  </div>

                  {/* Panel footer */}
                  <footer>
                    <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                      <div className="flex self-end">
                        <Link to={'/plant/' + plant_id}>
                          <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
                            나중에 쓸게요
                          </button>
                        </Link>
                        <button
                          className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                          onClick={handleSubmit}
                        >
                          리뷰 작성
                        </button>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PlantReview;
