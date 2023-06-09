import React, { useEffect } from 'react';
import { useSession } from 'utils/SessionManager';
import CommunityRegisterPresenter from './CommunityRegisterPresenter';
import { CommunityAPI } from 'api';
import { useNavigate } from 'react-router-dom';

const CommunityRegisterContainer = () => {
  /* Router */
  const navigate = useNavigate();
  /* State */
  const { session, isSession } = useSession();
  /* Functions */
  const handleCreateCommunity = async (communityInfo) => {
    const { tenant_nm, ...postData } = communityInfo;
    const result = await CommunityAPI.createCommunity(postData);
    if (result) {
      const { community_id } = result;
      navigate('/community/' + community_id);
      return true;
    }
    return false;
  };
  /* Hooks */
  useEffect(() => {
    if (!isSession) {
      return;
    }
  }, [isSession]);

  /* Render */
  return (
    session && (
      <CommunityRegisterPresenter
        session={session}
        createCommunity={handleCreateCommunity}
      />
    )
  );
};

export default CommunityRegisterContainer;
