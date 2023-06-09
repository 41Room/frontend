import React, { useEffect, useState } from 'react';
import CommunityMainPresenter from './CommunityPresenter';
import { CommunityAPI } from 'api';
import { useSession } from 'utils/SessionManager';

const CommunityMainContainer = () => {
  /* Router */
  /* State */
  const [communityList, setCommunityList] = useState([]);
  const { session } = useSession();
  /* Functions */
  /**
   * 커뮤니티 목록 조회
   * --
   * @param {*} building_id
   * @returns
   */
  const handleCommunityList = async (building_id) => {
    if (!building_id) {
      setCommunityList([]);
      return;
    }
    const result = await CommunityAPI.getCommunityList(building_id);
    if (result) {
      setCommunityList(result);
      return true;
    }
    setCommunityList([]);
    return false;
  };
  /* Hooks */
  useEffect(() => {
    if (!session) {
      return;
    }
    const { building_id } = session;
    handleCommunityList(building_id);
  }, [session]);

  /* Render */
  return (
    <CommunityMainPresenter communityList={communityList} session={session} />
  );
};

export default CommunityMainContainer;
