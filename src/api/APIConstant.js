import { BASE_URL } from '../utils';
import community from '../pages/community/index';

const AUTH_API = {
  /**
   * @method POST
   * @param
   */
  AGENT_SIGNUP: `${BASE_URL}/auth/agent/signup`,
  /**
   * @method POST
   * @param
   */
  AGENT_SIGNIN: `${BASE_URL}/auth/agent/signin`,
  /**
   * @method POST
   * @param
   */
  TENANT_SIGNUP: `${BASE_URL}/auth/tenant/signup`,
  /**
   * @method POST
   * @param
   */
  TENANT_SIGNIN: `${BASE_URL}/auth/tenant/signin`,
};

const BUILDING_API = {
  /**
   * @method POST
   * @param
   */
  CREATE_BUILDING: `${BASE_URL}/building`,
  /**
   * @method GET
   * @param
   */
  GET_BUILDING_LIST: `${BASE_URL}/building`,
  /**
   * @method GET
   * @param {string} building_id
   */
  GET_BUILDING: `${BASE_URL}/building/:building_id`,
  /**
   * @method PUT
   * @param
   */
  UPDATE_BUILDING: `${BASE_URL}/building`,
  /**
   * @method DELETE
   * @param {string} building_id
   */
  DELETE_BUILDING: `${BASE_URL}/building/:building_id`,
};

const PLANT_API = {
  /**
   * @method POST
   * @param
   */
  CREATE_PLANT: `${BASE_URL}/plant`,
  /**
   * @method GET
   * @param {string} building_id
   */
  GET_PLANT_LIST: `${BASE_URL}/plant/:building_id`,
  /**
   * @method GET
   * @param {string} plant_id
   */
  GET_PLANT: `${BASE_URL}/plant/:plant_id`,
  /**
   * @method PUT
   * @param
   */
  UPDATE_PLANT: `${BASE_URL}/plant`,
  /**
   * @method DELETE
   * @param {string} plant_id
   */
  DELETE_PLANT: `${BASE_URL}/plant/:plant_id`,
};

const REVIEW_API = {
  /**
   * @method POST
   * @param
   */
  CREATE_REVIEW: `${BASE_URL}/review`,
  /**
   * @method GET
   * @param {string} plant_id
   */
  GET_REVIEW_LIST: `${BASE_URL}/review/list/:plant_id`,
  /**
   * @method GET
   * @param {string} review_id
   */
  GET_REVIEW: `${BASE_URL}/review/:review_id`,
  /**
   * @method PUT
   * @param
   */
  UPDATE_REVIEW: `${BASE_URL}/review`,
  /**
   * @method DELETE
   * @param {string} review_id
   */
  DELETE_REVIEW: `${BASE_URL}/review/:review_id`,
};

const COMMUNITY_API = {
  /**
   * @method POST
   * @param
   */
  CREATE_COMMUNITY: `${BASE_URL}/community`,
  /**
   * @method GET
   * @param {string} building_id
   */
  GET_COMMUNITY_LIST: `${BASE_URL}/community/list/:building_id`,
  /**
   * @method GET
   * @param {string} community_id
   */
  GET_COMMUNITY: `${BASE_URL}/community/:community_id`,
  /**
   * @method PUT
   * @param
   */
  UPDATE_COMMUNITY: `${BASE_URL}/community`,
  /**
   * @method DELETE
   * @param {string} community_id
   */
  DELETE_COMMUNITY: `${BASE_URL}/community/:community_id`,
};

const VOTE_API = {
  /**
   * @method POST
   * @param
   */
  CREATE_VOTE: `${BASE_URL}/vote`,
  /**
   * @method GET
   * @param
   */
  GET_VOTE_LIST: `${BASE_URL}/vote`,
  /**
   * @method GET
   * @param {string} vote_id
   */
  GET_VOTE: `${BASE_URL}/vote/:vote_id`,
  /**
   * @method PUT
   * @param
   */
  UPDATE_VOTE: `${BASE_URL}/vote`,
  /**
   * @method DELETE
   * @param {string} vote_id
   */
  DELETE_VOTE: `${BASE_URL}/vote/:vote_id`,
};

const REPLY_API = {
  /**
   * @method POST
   * @param
   */
  CREATE_REPLY: `${BASE_URL}/reply`,
  /**
   * @method GET
   * @param {string} community_id
   */
  GET_REPLY_LIST: `${BASE_URL}/reply/list/:community_id`,
  /**
   * @method GET
   * @param {string} reply_id
   */
  GET_REPLY: `${BASE_URL}/reply/:reply_id`,
  /**
   * @method PUT
   * @param
   */
  UPDATE_REPLY: `${BASE_URL}/reply`,
  /**
   * @method DELETE
   * @param {string} reply_id
   */
  DELETE_REPLY: `${BASE_URL}/reply/:reply_id`,
};

const APIConstant = {
  ...AUTH_API,
  ...BUILDING_API,
  ...PLANT_API,
  ...REVIEW_API,
  ...COMMUNITY_API,
  ...VOTE_API,
  ...REPLY_API,
};

export default APIConstant;
