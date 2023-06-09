import axios from 'axios';
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
      const formData = new FormData();
      formData.append('file', imgInfo.file);
      formData.append('file_path', imgInfo.file_path);

      const url = APIConstant.UPLOAD_IMG;
      const { data: result } = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

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
