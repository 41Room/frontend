import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import InputText from '../../components/InputType/InputText';
import InputSelect from 'components/InputType/InputSelect';
import { BuildingAPI } from 'api';

function FormManager(props) {
  /* Router */

  /* State */
  const { signupValue, functions } = props;
  const { signupInfo, setSignupInfo } = signupValue;
  const { handleSubmit } = functions;
  const [buildingList, setBuildingList] = useState();

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

  /* Render */
  return (
    <form className="w-80">
      <div className="space-y-4">
        <InputText
          Name="이메일 주소"
          inputName="email"
          stateValue={signupInfo}
          setStateValue={setSignupInfo}
        />
        <InputText
          Name="이름"
          inputName="name"
          stateValue={signupInfo}
          setStateValue={setSignupInfo}
        />
        <InputText
          Name="비밀번호"
          inputName="pwd"
          inputType="password"
          stateValue={signupInfo}
          setStateValue={setSignupInfo}
        />
        <InputText
          Name="비밀번호 확인"
          inputName="checkpwd"
          inputType="password"
          stateValue={signupInfo}
          setStateValue={setSignupInfo}
        />
        <InputText
          Name="지갑주소"
          inputName="wallet"
          stateValue={signupInfo}
          setStateValue={setSignupInfo}
        />
        <InputSelect
          Name="거주 빌딩"
          inputName="buildingId"
          optionList={buildingList}
          stateValue={signupInfo}
          setStateValue={setSignupInfo}
        />
      </div>
      <div className="flex items-center justify-between mt-6">
        <Link
          className="w-full btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap"
          onClick={handleSubmit}
        >
          회원가입
        </Link>
      </div>
    </form>
  );
}

export default FormManager;
