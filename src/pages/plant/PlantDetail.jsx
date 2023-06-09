import React, { useEffect, useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import DetailItem from './components/DetailItem';

import { useParams } from 'react-router-dom';
import PlantAPI from '../../api/module/PlantAPI';
import BookForm from './components/BookForm';

function PlantDetail(props) {
  /* Router */

  /* State */
  const params = useParams();
  const { plant_id } = params;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState('');

  /* Hooks */
  // Plant Detail 정보 가져오기
  useEffect(() => {
    const getDetail = async () => {
      try {
        const result = await PlantAPI.getPlant(plant_id);

        if (result) {
          setDetailInfo(result);
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    };

    getDetail();
  }, [plant_id]);

  /* Functions */

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
          <div className="lg:relative lg:flex">
            {/* Page content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
              {/* Content */}
              <div>
                <div className="mb-3">
                  <a
                    className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    href="/plant"
                  >
                    &lt; 뒤로가기
                  </a>
                </div>
                {/* 메인 페이지 구성 */}
                <DetailItem plant_id={plant_id} stateValue={detailInfo} />
                <hr className="my-6 border-t border-slate-200" />
              </div>
            </div>
            <BookForm plant_id={plant_id} stateValue={detailInfo} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default PlantDetail;
