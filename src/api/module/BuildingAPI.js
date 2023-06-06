import ApiManager from '../../utils/APIManager';
import APIConstant from '../APIConstant';
const $http = new ApiManager();
const BuildingAPI = {
  /**
   * 건물 생성
   * --
   * @param {*} buildingInfo
   * @returns
   */
  createBuilding: async (buildingInfo) => {
    try {
      const url = APIConstant.CREATE_BUILDING;
      const result = await $http.post(url, buildingInfo);
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
   * 건물 목록 조회
   * --
   * @returns
   */
  getBuildingList: async () => {
    try {
      const url = APIConstant.GET_BUILDING_LIST;
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
   * 건물 상세 조회
   * --
   * @param {string} building_id
   * @returns
   */
  getBuilding: async (building_id) => {
    try {
      const url = APIConstant.GET_BUILDING.replace(':building_id', building_id);
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
   * 건물 정보 수정
   * --
   * @param {*} buildingInfo
   * @returns
   */
  updateBuilding: async (buildingInfo) => {
    try {
      const url = APIConstant.UPDATE_BUILDING;
      const result = await $http.put(url, buildingInfo);
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
   * 건물 삭제
   * --
   * @param {*} building_id
   * @returns
   */
  deleteBuilding: async (building_id) => {
    try {
      const url = APIConstant.DELETE_BUILDING.replace(
        ':building_id',
        building_id
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

export default BuildingAPI;
