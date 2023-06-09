import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputText from 'components/InputType/InputText';

import { useSession } from 'utils/SessionManager';
import { ReviewAPI } from 'api';

const bookInit = {
  name: '',
  wallet: '',
  date: '',
  time: '',
  fee: '',
};

function BookForm(props) {
  /* Router */
  const navigate = useNavigate();

  /* State */
  const [bookInfo, setBookInfo] = useState(bookInit);
  const { plant_id, stateValue } = props;
  const { plant_nm, plant_fee } = stateValue;
  const { session } = useSession();

  /* Hooks */
  useEffect(() => {
    // if (session) {
    //   // *ISSUE* 이렇게 해야되나
    //   // *ISSUE* 새로고침시 동작 하지 않음
    //   setBookInfo({
    //     ...bookInfo,
    //     name: session.tenant_nm,
    //     wallet: session.wallet_id,
    //   });
    // }
    return;
  }, []);

  /* Functions */
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(bookInfo);

    if (!session) {
      console.log(session);
      alert('로그인을 진행해주세요 ');
      return;
    }

    // 새로고침시 session 값 못가져오는 문제 해결방안
    if (bookInfo.name === '') {
      setBookInfo({ ...bookInfo, name: session.tenant_nm });
    }
    if (bookInfo.wallet === '') {
      setBookInfo({ ...bookInfo, wallet: session.wallet_id });
    }

    if (bookInfo.date === '' || bookInfo.time === '') {
      alert('모든 항목을 입력해주세요 !');
      return false;
    } else {
      return true;
    }
  };

  /* Render */
  return (
    <div>
      <div className="lg:sticky lg:top-16 bg-slate-50 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:w-[320px] xl:w-[352px] 2xl:w-[calc(352px+80px)] lg:h-[calc(100vh-64px)]">
        <div className="py-8 px-4 lg:px-8 2xl:px-12">
          <div className="max-w-sm mx-auto lg:max-w-none">
            <h2 className="text-2xl text-slate-800 font-bold mb-6">
              예약 하기
            </h2>
            <div className="space-y-6">
              {/* 요약 정보 */}
              <div>
                <div className="text-slate-800 font-semibold mb-2">
                  대여 수수료
                </div>
                <ul className="mb-4">
                  <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200">
                    <div>가격</div>
                    <div className="font-medium text-emerald-600">
                      ₩ {plant_fee}
                    </div>
                  </li>
                </ul>
              </div>

              {/* 예약 상세 정보 */}
              <div>
                <div className="text-slate-800 font-semibold mb-4">
                  예약자 정보
                </div>
                <div className="space-y-4">
                  {/* 예약자 정보 */}
                  <InputText
                    Name="예약자 이름"
                    inputName="name"
                    defaultValue={session && session.tenant_nm}
                    stateValue={bookInfo}
                    setStateValue={setBookInfo}
                    readOnly={true}
                  />
                  {/* 지갑 주소 */}
                  <InputText
                    Name="지갑 주소"
                    inputName="wallet"
                    defaultValue={session ? session.wallet_id : ''}
                    stateValue={bookInfo}
                    setStateValue={setBookInfo}
                    readOnly={true}
                  />
                  <hr className="my-6 border-t border-slate-200" />
                  {/* 예약 정보 */}
                  <div className="text-slate-800 font-semibold mb-4">
                    예약 정보
                  </div>
                  <div className="flex space-x-4">
                    {/* 에약 날짜 */}
                    <InputText
                      Name="날짜"
                      divCN="flex-1"
                      inputName="date"
                      inputType="date"
                      stateValue={bookInfo}
                      setStateValue={setBookInfo}
                    />
                    {/* 예약 시간 */}
                    <InputText
                      Name="시간"
                      divCN="flex-1"
                      inputName="time"
                      inputType="time"
                      stateValue={bookInfo}
                      setStateValue={setBookInfo}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-4">
                  <button
                    className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                    onClick={handleSubmit}
                  >
                    Pay ₩ {plant_fee}
                  </button>
                </div>
                <div className="text-xs text-slate-500 italic text-center">
                  생각보다 싸죠?! This is 41Room !
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookForm;
