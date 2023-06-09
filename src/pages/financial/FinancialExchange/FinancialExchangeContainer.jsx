import React, { useEffect, useState } from 'react';
import FinancialExchangePresenter from './FinancialExchangePresenter';
import { useSession } from 'utils/SessionManager';
import { CommonAPI } from 'api';

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
    console.log(val);
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
