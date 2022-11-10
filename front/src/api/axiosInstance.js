import axios from "axios";

const request = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${import.meta.env.VITE_REST_API_KEY}`,
  },
});

export default request;
