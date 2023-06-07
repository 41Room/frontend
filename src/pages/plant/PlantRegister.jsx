import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import PlantAPI from '../../api/module/PlantApi';

import ProductImage01 from '../../images/related-product-01.jpg';
import ProductImage02 from '../../images/related-product-02.jpg';
import ProductImage03 from '../../images/related-product-03.jpg';

import AppImage01 from '../../images/applications-image-01.jpg';

import ContentItem from './components/ContentItem';
import InputText from '../../components/InputType/InputText';
import TextArea from '../../components/InputType/TextArea';
import InputImg from '../../components/InputType/InputImg';

const registerInit = {
  buildingId: '',
  name: '',
  desc: '',
  img: '',
  fee: 0,
};

function PlantRegister() {
  /* Router */

  /* State */
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [registerInfo, setRegisterInfo] = useState(registerInit);

  /* Hooks */

  /* Functions */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('시설 등록');
      const plantInfo = {
        building_id: 'dbaba46e-d409-4f36-ba37-eac697e5e0f7',
        plant_nm: registerInfo.name,
        plant_desc: registerInfo.desc,
        plant_img: registerInfo.img,
        plant_fee: parseInt(registerInfo.fee),
      };
      const result = await PlantAPI.createPlant(plantInfo);

      if (result) {
        navigator('/plant');
      }
    } catch (e) {
      console.log(e);
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
          <div className="lg:relative lg:flex">
            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
              <div className="lg:max-w-[640px] lg:mx-auto">
                {/* Cart items */}
                <div className="mb-6 lg:mb-0">
                  <header className="mb-6">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
                      시설 등록 ✨
                    </h1>
                    <p>시설에 대한 정보를 알려주세요</p>
                  </header>
                  {/* Billing Information */}
                  <div>
                    <form>
                      <div className="space-y-4">
                        {/* 1st row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <InputText
                            Name="시설 이름"
                            divCN="flex-1"
                            inputName="name"
                            stateValue={registerInfo}
                            setStateValue={setRegisterInfo}
                          />
                          <InputText
                            Name="시설 수수료"
                            divCN="flex-1"
                            inputName="fee"
                            inputType="number"
                            stateValue={registerInfo}
                            setStateValue={setRegisterInfo}
                          />
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <InputText
                            Name="빌딩 ID"
                            divCN="flex-1"
                            inputName="buildingId"
                            stateValue={registerInfo}
                            setStateValue={setRegisterInfo}
                          />
                          <InputImg
                            Name="사진 첨부"
                            divCN="flex-1"
                            inputName="img"
                            stateValue={registerInfo}
                            setStateValue={setRegisterInfo}
                          />
                        </div>

                        {/* 3th row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          {/* {registerInfo.img != '' && (
                            <div>
                              <img src="" alt="" />
                            </div>
                          )} */}
                          <TextArea
                            Name="시설 설명"
                            divCN="flex-1"
                            inputName="desc"
                            placeholder="시설 설명을 입력하세요"
                            stateValue={registerInfo}
                            setStateValue={setRegisterInfo}
                          />
                        </div>
                        <div className="text-right">
                          <button
                            type="submit"
                            className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500"
                            onClick={handleSubmit}
                          >
                            시설 등록
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="lg:sticky lg:top-16 bg-slate-50 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:w-[320px] xl:w-[352px] 2xl:w-[calc(352px+80px)] lg:h-[calc(100vh-64px)]">
                <div className="py-8 px-4 lg:px-8 2xl:px-12">
                  <div className="max-w-sm mx-auto lg:max-w-none">
                    <h2 className="text-2xl text-slate-800 font-bold mb-6">
                      Hot !!
                    </h2>
                    <div className="space-y-6">
                      {/* Order Details */}
                      {/* Card 1 */}
                      <ContentItem
                        imgSrc={ProductImage01}
                        plantName="부산대학교"
                        price={39000}
                        star={4.8}
                        firstText="24시간 Open"
                        secondText="20개 건물"
                        thirdText="무료 Wifi"
                        fourthText="900만명 이상 방문"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PlantRegister;
