import React, { useEffect, useState } from 'react';
import FinancialExchangePresenter from './FinancialExchangePresenter';
import { useSession } from 'utils/SessionManager';
import { CommonAPI, Web3API } from 'api';
import { useLoading } from 'hooks/useLoading';
import { useNavigate } from 'react-router-dom';

const FinancialExchangeContainer = () => {
  /* Router */
  const navigate = useNavigate();
  /* State */
  const { session, handleBalance } = useSession();
  const { handleLoading, handleLoadingTimer } = useLoading();
  const [thumbnail, setThumbnail] = useState('');
  /* Functions */
  /**
   * 랜덤 이미지
   * --
   */
  const handleImage = async () => {
    const result = await CommonAPI.getRandomImage();
    if (result) {
      const { thumbnailUrl } = result;
      setThumbnail(thumbnailUrl);
    }
  };

  /**
   * 환전 요청
   * --
   * @param {*} val
   */
  const handleExchange = async (val) => {
    handleLoading(true);
    const result = await Web3API.transferToken({
      to: session?.wallet_id,
      amount: val,
    });
    if (result) {
      handleBalance(session);
      handleLoadingTimer(3000, () => {
        alert('환전이 완료되었습니다.');
        navigate('/');
      });
      return true;
    }
    handleLoading(false);
    return false;
  };
  /* Hooks */
  useEffect(() => {
    handleImage();
  }, []);

  /* Render */
  return session ? (
    <FinancialExchangePresenter
      session={session}
      thumbnail={thumbnail}
      submit={handleExchange}
    />
  ) : (
    ''
  );
};

export default FinancialExchangeContainer;
