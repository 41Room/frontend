import { useLocation } from 'react-router-dom';

export { default as APIManager } from './APIManager';
export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const HOST_DOMAIN = import.meta.env.VITE_HOST_DOMAIN;
export const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * 세션 체크
 * --
 * @returns
 */
export const checkSession = () => {
  const s = getCookie('41ROOM');
  if (s && s.length >= 0) {
    return true;
  }
  return false;
};

export const logout = () => {
  deleteCookie('41ROOM', { path: '/', domain: HOST_DOMAIN });
  const r = checkSession();
  if (r) {
    return false;
  }
  return true;
};

/**
 * 쿠키 가져오기
 * --
 * @param {String} name 쿠키명
 * @param {Object} options
 * @returns
 */
export const getCookie = (name, options = null) => {
  const value = window.document.cookie.match(
    '(^|;) ?' + name + '=([^;]*)(;|$)'
  );
  return value ? value[2] : null;
};

/**
 * 쿠키 저장하기
 * --
 * @param {String} name 저장할 쿠키명
 * @param {String} value 저장할 쿠키 내용
 * @param {Number} expires 저장할 기간(일)
 * @param {Function} callback 콜백함수
 */
export const setCookie = (name, value, expires = 1, callback = false) => {
  var date = new Date();
  date.setTime(date.getTime() + expires * 1000 * 60 * 60 * 24);
  window.document.cookie = `${name}=${value};expires=${date.toUTCString()}; path=/`;
  if (callback) callback();
};

/**
 * 쿠키 삭제
 * --
 * @param {String} name 쿠키명
 * @param {Object} param1 쿠키 주소, 도메인
 */
export const deleteCookie = (name, { path, domain }) => {
  if (getCookie(name)) {
    window.document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
};

export const getRandomInt = (min = 1, max = 20) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

export const loremIpsum =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, mollitia commodi a eius nemo aspernatur libero repellat quam recusandae. Natus qui laborum dolorum nostrum consequatur iste consequuntur eius labore repellat.';
