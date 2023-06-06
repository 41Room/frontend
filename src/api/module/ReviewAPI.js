import ApiManager from '../../utils/APIManager';
import APIConstant from '../APIConstant';
const $http = new ApiManager();

const ReviewAPI = {
  /**
   * 리뷰 등록
   * --
   * @param {*} reviewInfo
   * @returns
   */
  createReview: async (reviewInfo) => {
    try {
      const url = APIConstant.CREATE_REVIEW;
      const result = await $http.post(url, reviewInfo);
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
   * 리뷰 목록 조회
   * --
   * @param {*} plant_id
   * @returns
   */
  getReviewList: async (plant_id) => {
    try {
      const url = APIConstant.GET_REVIEW_LIST.replace(':plant_id', plant_id);
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
   * 리뷰 상세 조회
   * --
   * @param {*} review_id
   * @returns
   */
  getReview: async (review_id) => {
    try {
      const url = APIConstant.GET_PLANT.replace(':review_id', review_id);
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
   * 리뷰 수정
   * --
   * @param {*} reviewInfo
   * @returns
   */
  updateReview: async (reviewInfo) => {
    try {
      const url = APIConstant.UPDATE_REVIEW;
      const result = await $http.put(url, reviewInfo);
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
   * 리뷰 삭제
   * --
   * @param {*} review_id
   * @returns
   */
  deleteReview: async (review_id) => {
    try {
      const url = APIConstant.DELETE_PLANT.replace(':review_id', review_id);
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

export default ReviewAPI;
