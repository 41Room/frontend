import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import InputText from '../../components/InputType/InputText';
import InputSelect from 'components/InputType/InputSelect';
import MetamaskIcon from 'images/metamask.png';
import { BuildingAPI } from 'api';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { disconnect } from '@wagmi/core';

function FormUser(props) {
  /* Router */
  /* State */
  const { signupValue, functions } = props;
  const { signupInfo, setSignupInfo } = signupValue;
  const { handleSubmit } = functions;
  const [buildingList, setBuildingList] = useState([]);
  const [wallet, setWallet] = useState(null);
  const { isConnected, address } = useAccount();
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();

  /* Hooks */
  useEffect(() => {
    const getBuildingList = async (e) => {
      try {
        const result = await BuildingAPI.getBuildingList();

        if (result) {
          await setBuildingList(result);
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    };

    getBuildingList();
  }, []);

  useEffect(() => {
    if (!isConnected) return;
    console.log(address);
    setWallet(address);
    setSignupInfo({ ...signupInfo, wallet_id: address });
    return () => {
      disconnect();
    };
  }, [isConnected]);

  /* Functions */
  const handleMetamask = (e) => {
    e.preventDefault();
    connect({ connector: connectors[0] });
    console.log(address);
  };
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

        {wallet ? (
          <InputText
            Name="지갑주소"
            inputName="wallet_id"
            stateValue={signupInfo}
            defaultValue={wallet}
            setStateValue={setSignupInfo}
          />
        ) : (
          <button
            className="w-full btn bg-indigo-500 hover:bg-indigo-600 text-white "
            onClick={handleMetamask}
          >
            <img src={MetamaskIcon} className="w-6 mr-5" alt="img" />
            MetaMask로 지갑 연결
          </button>
        )}

        <InputSelect
          Name="거주 빌딩"
          inputName="buildingId"
          optionList={buildingList}
          stateValue={signupInfo}
          setStateValue={setSignupInfo}
        />
        <div className="flex justify-between">
          <InputText
            Name="동"
            inputName="dong"
            divCN="w-6/12 pr-1"
            stateValue={signupInfo}
            setStateValue={setSignupInfo}
          />
          <InputText
            Name="호"
            inputName="ho"
            divCN="w-6/12 pl-1"
            stateValue={signupInfo}
            setStateValue={setSignupInfo}
          />
        </div>
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

export default FormUser;
