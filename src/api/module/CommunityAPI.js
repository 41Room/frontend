import ApiManager from '../../utils/APIManager';
import APIConstant from '../APIConstant';
const $http = new ApiManager();

const CommunityAPI = {
  /**
   * 커뮤니티 등록
   * --
   * @param {*} communityInfo
   * @returns
   */
  createCommunity: async (communityInfo) => {
    try {
      const url = APIConstant.CREATE_COMMUNITY;
      const result = await $http.post(url, communityInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      throw e;
    }
  },
  /**
   * 커뮤니티 목록 조회
   * --
   * @param {*} building_id
   * @returns
   */
  getCommunityList: async (building_id) => {
    try {
      const url = APIConstant.GET_COMMUNITY_LIST.replace(
        ':building_id',
        building_id
      );
      const result = await $http.get(url);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      throw e;
    }
  },
  /**
   * 커뮤니티 상세 조회
   * --
   * @param {*} community_id
   * @returns
   */
  getCommunity: async (community_id) => {
    try {
      const url = APIConstant.GET_COMMUNITY.replace(
        ':community_id',
        community_id
      );
      const result = await $http.get(url);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      throw e;
    }
  },
  /**
   * 커뮤니티 수정
   * --
   * @param {*} communityInfo
   * @returns
   */
  updateCommunity: async (communityInfo) => {
    try {
      const url = APIConstant.UPDATE_PLANT;
      const result = await $http.put(url, communityInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      throw e;
    }
  },
  /**
   * 커뮤니티 삭제
   * --
   * @param {*} community_id
   * @returns
   */
  deleteCommunity: async (community_id) => {
    try {
      const url = APIConstant.DELETE_PLANT.replace(
        ':community_id',
        community_id
      );
      const result = await $http.delete(url);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      throw e;
    }
  },
};

export default CommunityAPI;
