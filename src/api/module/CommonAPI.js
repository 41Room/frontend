import { getRandomInt } from 'utils';
import ApiManager from '../../utils/APIManager';
const $http = new ApiManager();

const CommonAPI = {
  /**
   * 이미지 랜덤 조회
   * --
   * @returns
   */
  getRandomImage: async (id) => {
    try {
      const num = getRandomInt();
      const url = `https://api.slingacademy.com/v1/sample-data/photos/${num}`;
      const result = await $http.get(url);
      if (result) {
        return { ...result.photo, thumbnailUrl: result.photo.url };
      }
      throw new Error('error');
    } catch (e) {
      throw e;
    }
  },
  /**
   * 아바타 랜덤 조회
   * --
   * @returns
   */
  getAvatar: async (id) => {
    try {
      const url = `https://i.pravatar.cc/150?u=${id}`;
      const result = await $http.get(url);
      if (result) {
        return { ...result.photo, thumbnailUrl: result.photo.url };
      }
      throw new Error('error');
    } catch (e) {
      throw e;
    }
  },
  /**
   * 랜덤 유저정보
   * --
   * @param {*} id
   * @returns
   */
  getCommunityUserList: async (id) => {
    try {
      const url = `https://api.slingacademy.com/v1/sample-data/users?offset=0&limit=150`;
      // const url = `https://api.slingacademy.com/v1/sample-data/users/${id}`;
      const result = await $http.get(url);
      if (result) {
        return result;
      }
      throw new Error('error');
    } catch (e) {
      throw e;
    }
  },
};

export default CommonAPI;
