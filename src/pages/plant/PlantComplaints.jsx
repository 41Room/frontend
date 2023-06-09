import React, { useState, useEffect } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { PlantAPI } from 'api';
import { Link, useParams } from 'react-router-dom';
import { toolongText } from 'utils/Utils';
import TextArea from 'components/InputType/TextArea';
import InputText from 'components/InputType/InputText';
import { useSession } from 'utils/SessionManager';

const complaintInit = {
  tenant_id: '',
  tenant_nm: '',
  plant_id: '',
  plant_nm: '',
  complaint: '',
};

function PlantComplaints() {
  /* Router */

  /* State */
  const { session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const params = useParams();
  const { plant_id } = params;
  const [complaintInfo, setComplaintInfo] = useState(complaintInit);

  /* Hooks */

  // *ISSUE*
  useEffect(() => {
    const getDetail = async () => {
      try {
        const result = await PlantAPI.getPlant(plant_id);

        if (result) {
          setComplaintInfo({
            ...complaintInfo,
            tenant_id: session.tenant_id,
            tenant_nm: session.tenant_nm,
            plant_id: result.plant_id,
            plant_nm: result.plant_nm,
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
    if (complaintInfo.complaint === '') {
      alert('모든 항목을 입력해주세요');
      return;
    }
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
                불편사항 및 개선점 문의 ❗️
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white shadow-lg rounded-sm mb-8">
              <div className="flex flex-col md:flex-row md:-mr-px">
                {/* <SettingsSidebar /> */}
                <div className="grow">
                  {/* Panel body */}
                  <div className="p-6 space-y-6">
                    {/* 사용자 / 시설 정보 */}
                    <section>
                      <h3 className="text-xl leading-snug text-slate-800 font-bold mb-6">
                        사용자 정보
                      </h3>
                      <InputText
                        Name="이름"
                        inputName="tenant_nm"
                        defaultValue="tenant_nm"
                        stateValue={complaintInfo}
                        setStateValue={setComplaintInfo}
                      />
                      <InputText
                        Name="시설"
                        inputName="plant_nm"
                        defaultValue="plant_nm"
                        stateValue={complaintInfo}
                        setStateValue={setComplaintInfo}
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
                        inputName="complaint"
                        placeholder="개선사항 및 문제점을 자세히 작성해주세요 !"
                        stateValue={complaintInfo}
                        setStateValue={setComplaintInfo}
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

export default PlantComplaints;
