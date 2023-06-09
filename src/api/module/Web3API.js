import ApiManager from '../../utils/APIManager';
import APIConstant from '../APIConstant';
const $http = new ApiManager();

const Web3API = {
  /**
   * 토큰 발급
   * --
   * @param {*} exchangeInfo
   * @returns
   */
  transferToken: async (exchangeInfo) => {
    try {
      const url = APIConstant.TRANSFER_TOKEN;
      const result = await $http.post(url, exchangeInfo);
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
   * 토큰 발급
   * --
   * @param {*} nftInfo
   * @returns
   */
  transferNFT: async (nftInfo) => {
    try {
      const url = APIConstant.TRANSFER_NFT;
      const result = await $http.post(url, nftInfo);
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

export default Web3API;
