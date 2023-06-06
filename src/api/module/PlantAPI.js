import ApiManager from '../../utils/APIManager';
import APIConstant from '../APIConstant';
const $http = new ApiManager();

const PlantAPI = {
  /**
   * 시설 생성
   * --
   * @param {*} plantInfo
   * @returns
   */
  createPlant: async (plantInfo) => {
    try {
      const url = APIConstant.CREATE_PLANT;
      const result = await $http.post(url, plantInfo);
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
   * 시설 목록 조회
   * --
   * @param {*} building_id
   * @returns
   */
  getPlantList: async (building_id) => {
    try {
      const url = APIConstant.GET_PLANT_LIST.replace(
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
   * 시설 상세 조회
   * --
   * @param {*} plant_id
   * @returns
   */
  getPlant: async (plant_id) => {
    try {
      const url = APIConstant.GET_PLANT.replace(':plant_id', plant_id);
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
   * 시설 수정
   * --
   * @param {*} plantInfo
   * @returns
   */
  updatePlant: async (plantInfo) => {
    try {
      const url = APIConstant.UPDATE_PLANT;
      const result = await $http.put(url, plantInfo);
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
   * 시설 삭제
   * --
   * @param {*} plant_id
   * @returns
   */
  deletePlant: async (plant_id) => {
    try {
      const url = APIConstant.DELETE_PLANT.replace(':plant_id', plant_id);
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

export default PlantAPI;
