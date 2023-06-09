import ApiManager from '../../utils/APIManager';
import APIConstant from '../APIConstant';
const $http = new ApiManager();

const FileAPI = {
  /**
   * 이미지 업로드
   * --
   * @param {*} imgInfo
   * @returns
   */
  uploadImg: async (imgInfo) => {
    try {
      const url = APIConstant.UPLOAD_IMG;
      const result = await $http.post(url, imgInfo);
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

export default FileAPI;
