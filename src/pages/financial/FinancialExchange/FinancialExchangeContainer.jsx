import React, { useEffect, useState } from 'react';
import FinancialExchangePresenter from './FinancialExchangePresenter';
import { useSession } from 'utils/SessionManager';
import { CommonAPI, Web3API } from 'api';

const FinancialExchangeContainer = () => {
  /* Router */
  /* State */
  const { session } = useSession();
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
    const result = await Web3API.transferToken({
      to: session?.wallet_id,
      amount: val,
    });
    if (result) {
      return true;
    }
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
