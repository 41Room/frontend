import ApiManager from '../../utils/APIManager';
import APIConstant from '../APIConstant';
const $http = new ApiManager();

const AuthApi = {
  /**
   * 대리인 회원가입
   * --
   * @param {*} agentInfo
   * @returns
   */
  agentSignup: async (agentInfo) => {
    try {
      const url = APIConstant.AGENT_SIGNUP;
      const result = await $http.post(url, agentInfo);
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
   * 대리인 로그인
   * --
   * @param {*} loginInfo
   * @returns
   */
  agentSignin: async (loginInfo) => {
    try {
      const url = APIConstant.AGENT_SIGNIN;
      const result = await $http.post(url, loginInfo);
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
   * 세대 회원가입
   * --
   * @param {*} tenantInfo
   * @returns
   */
  tenantSignup: async (tenantInfo) => {
    try {
      const url = APIConstant.TENANT_SIGNUP;
      const result = await $http.post(url, tenantInfo);
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
   * 세대 로그인
   * --
   * @param {*} loginInfo
   * @returns
   */
  tenantSignin: async (loginInfo) => {
    try {
      const url = APIConstant.TENANT_SIGNIN;
      const result = await $http.post(url, loginInfo);
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

export default AuthApi;
