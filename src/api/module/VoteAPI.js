import ApiManager from '../../utils/APIManager';
import APIConstant from '../APIConstant';
const $http = new ApiManager();

const VoteAPI = {
  /**
   * 투표 등록
   * --
   * @param {*} voteInfo
   * @returns
   */
  createVote: async (voteInfo) => {
    try {
      const url = APIConstant.CREATE_VOTE;
      const result = await $http.post(url, voteInfo);
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
   * 투표 목록 조회
   * --
   * @param {*} community_id
   * @returns
   */
  getVoteList: async (community_id) => {
    try {
      const url = APIConstant.GET_VOTE_LIST.replace(
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
   * 투표 상세 조회
   * --
   * @param {*} vote_id
   * @returns
   */
  getVote: async (vote_id) => {
    try {
      const url = APIConstant.GET_VOTE.replace(':vote_id', vote_id);
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
   * 투표 수정
   * --
   * @param {*} voteInfo
   * @returns
   */
  updateVote: async (voteInfo) => {
    try {
      const url = APIConstant.UPDATE_VOTE;
      const result = await $http.put(url, voteInfo);
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
   * 투표 삭제
   * --
   * @param {*} vote_id
   * @returns
   */
  deleteVote: async (vote_id) => {
    try {
      const url = APIConstant.DELETE_VOTE.replace(':vote_id', vote_id);
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

export default VoteAPI;
