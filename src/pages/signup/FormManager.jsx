import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import InputText from './components/InputText';

function FormManager(props) {
  /* Router */
  /* State */
  const { signupValue, functions } = props;
  const { nextStep, backStep } = functions;
  const { signupStep, setSignupStep, signupInfo, setSignupInfo } = signupValue;
  /* Hooks */

  /* Functions */

  /* Render */
  return (
    <form className="w-80">
      <div className="space-y-4">
        <InputText
          Name="이메일 주소"
          inputName="email"
          signupValue={signupValue}
        />
        <InputText Name="이름" inputName="name" signupValue={signupValue} />
        <InputText
          Name="비밀번호"
          inputName="pwd"
          inputType="password"
          signupValue={signupValue}
        />
        <InputText
          Name="비밀번호 확인"
          inputName="checkpwd"
          inputType="password"
          signupValue={signupValue}
        />
        <InputText
          Name="지갑주소"
          inputName="wallet"
          signupValue={signupValue}
        />
        <InputText
          Name="입주 건물 고유 번호"
          inputName="buildingId"
          signupValue={signupValue}
        />
      </div>
      <div className="flex items-center justify-between mt-6">
        <Link
          className="w-full btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap"
          onClick={nextStep}
        >
          회원가입
        </Link>
      </div>
    </form>
  );
}

export default FormManager;
