import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import InputText from '../../components/InputType/InputText';

function FormManager(props) {
  /* Router */
  /* State */
  const { signupValue, functions } = props;
  const { signupInfo, setSignupInfo } = signupValue;
  const { nextStep, handleSubmit } = functions;
  /* Hooks */

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
        <InputText Name="이름" inputName="name" signupValue={signupValue} />
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
        <InputText
          Name="입주 건물 고유 번호"
          inputName="buildingId"
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
