import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { usePlant } from 'utils/PlantManager';

import { BuildingAPI, PlantAPI } from 'api';

import ContentItem from './components/ContentItem';
import InputText from '../../components/InputType/InputText';
import TextArea from '../../components/InputType/TextArea';
import InputImg from '../../components/InputType/InputImg';
import FileAPI from 'api/module/FileAPI';
import InputSelect from 'components/InputType/InputSelect';
import { useSession } from 'utils/SessionManager';

const registerInit = {
  buildingId: '',
  name: '',
  desc: '',
  img: null,
  fee: 0,
};

function PlantRegister() {
  /* Router */
  const navigate = useNavigate();

  /* State */
  const { session } = useSession();
  const [buildingList, setBuildingList] = useState();
  const { plantList, setPlantList } = usePlant();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [registerInfo, setRegisterInfo] = useState(registerInit);
  const [file, setFile] = useState(null);

  /* Hooks */
  useEffect(() => {
    const getBuildingList = async (e) => {
      try {
        const result = await BuildingAPI.getBuildingList();

        if (result) {
          setBuildingList(result);
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    };

    getBuildingList();
  }, []);

  /* Functions */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      (registerInfo.buildingId === '',
      registerInfo.name === '',
      registerInfo.desc === '',
      registerInfo.img === '',
      registerInfo.fee === 0)
    ) {
      alert('필수 항목을 입력하세요 !');
      return;
    }

    const checkImg = await uploadImg(registerInfo.img);

    if (checkImg === '') {
      return;
    }

    try {
      const plantInfo = {
        building_id: registerInfo.buildingId,
        plant_nm: registerInfo.name,
        plant_desc: registerInfo.desc,
        plant_img: `https://api-41room.islab.dev${checkImg}`,
        plant_fee: parseInt(registerInfo.fee),
      };

      const result = await PlantAPI.createPlant(plantInfo);

      if (result) {
        navigate('/plant/' + result.plant_id);
      } else {
        // *ISSUE* 이미지 삭제 처리가 필요함
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Server에 Img 저장
  // *ISSUE* IMG올리는 처리 해야함
  const uploadImg = async (e) => {
    try {
      const formData = new FormData();

      const imgInfo = {
        file: registerInfo.img,
        file_path: 'uploads/users',
      };

      const result = await FileAPI.uploadImg(imgInfo);

      console.log('HERE');
      console.log(result);

      if (result) {
        return result;
      }
    } catch (e) {
      console.log(e);
    }
    return '';
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
                            Name="담당 빌딩"
                            inputName="buildingId"
                            stateValue={registerInfo}
                            setStateValue={setRegisterInfo}
                            defaultValue={session.building_id}
                            readOnly={true}
                          />
                          <InputImg
                            Name="사진 첨부"
                            divCN="flex-1"
                            inputName="img"
                            stateValue={registerInfo}
                            setStateValue={setRegisterInfo}
                            file={file}
                            setFile={setFile}
                          />
                        </div>

                        {/* 3th row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
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
                            // onClick={uploadImg}
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

            {/* Hot 시설 */}
            <div>
              <div className="lg:sticky lg:top-16 bg-slate-50 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:w-[320px] xl:w-[352px] 2xl:w-[calc(352px+80px)] lg:h-[calc(100vh-64px)]">
                <div className="py-8 px-4 lg:px-8 2xl:px-12">
                  <div className="max-w-sm mx-auto lg:max-w-none">
                    <h2 className="text-2xl text-slate-800 font-bold mb-6">
                      Hot !!
                    </h2>
                    <div className="space-y-6">
                      {/* Hot 시설 */}
                      {plantList[0] && (
                        <ContentItem
                          imgSrc={plantList[0].plant_img}
                          plantName={plantList[0].plant_nm}
                          price={plantList[0].plant_fee}
                          star={4.8}
                          plantDesc={plantList[0].plant_desc}
                        />
                      )}
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
