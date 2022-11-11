import request from "./axiosInstance";

/**
 * 위도, 경도로 행정구역 받기
 */
function regionFetch(x, y) {
  return request.get(`/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`);
}
/**
 * 카테고리(메뉴)
 */
function shopFetch(x, y, menu, page, kind) {
  return request.get(`/v2/local/search/keyword.json?query=${menu}&y=${y}&x=${x}&radius=3000&page=${page}&size=10&category_group_code=${kind}`);
}
/**
 * 가게리스트 이미지 검색
 */
function shopImgFetch(shop) {
  return request.get(`/v2/search/image?query=${shop}&size=1`);
}
const kakaoApi = { regionFetch, shopFetch, shopImgFetch };
export default kakaoApi;
