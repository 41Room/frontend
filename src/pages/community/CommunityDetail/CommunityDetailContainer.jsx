import React, { useEffect, useState } from 'react';
import CommunityDetailPresenter from './CommunityDetailPresenter';
import { useParams } from 'react-router-dom';
import { CommonAPI, CommunityAPI } from 'api';

const CommunityDetailContainer = () => {
  /* Router */
  const { community_id } = useParams();
  /* State */
  const [community, setCommunity] = useState();
  const [voteInfo, setVoteInfo] = useState();
  const [thumbnail, setThumbnail] = useState('');
  const [userList, setuserList] = useState([]);
  /* Functions */
  /**
   * 커뮤니티 상세 정보 조회
   * --
   * @returns
   */
  const handleCommunityInfo = async () => {
    const result = await CommunityAPI.getCommunity(community_id);
    if (result) {
      setCommunity(result);
      return true;
    }
    setCommunity(null);
    return false;
  };

  /**
   * 투표하기
   * --
   */
  const handleVoting = () => {
    // ㅅㅂ
  };

  /**
   * 랜덤 이미지
   * --
   */
  const handleImage = async () => {
    const result = await CommonAPI.getRandomImage(community_id);
    if (result) {
      const { thumbnailUrl } = result;
      setThumbnail(thumbnailUrl);
    }
  };

  const handleUserList = async () => {
    const result = await CommonAPI.getCommunityUserList(community_id);
    if (result) {
      setuserList(result.users);
      return true;
    }
    return false;
  };

  /* Hooks */
  useEffect(() => {
    if (!community_id) {
      return;
    }
    handleCommunityInfo();
    handleImage();
    handleUserList();
  }, [community_id]);

  /* Render */
  return (
    <CommunityDetailPresenter
      community={community}
      thumbnail={thumbnail}
      userList={userList}
    />
  );
};

export default CommunityDetailContainer;
