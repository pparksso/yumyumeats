import { defineStore } from "pinia";
import kakaoApi from "../api/kakao";

export const gpsStore = defineStore("gps", {
  state: () => ({
    x: "",
    y: "",
    address: "",
    menu: "",
    list: "",
    img: [],
    count: "",
  }),
  actions: {
    getAreaAct() {
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          this.x = position.coords.longitude;
          this.y = position.coords.latitude;
          kakaoApi.regionFetch(position.coords.longitude, position.coords.latitude).then((res) => (this.address = res.data.documents[0].address_name));
        });
      } catch (err) {
        console.log(err);
      }
    },
    getMenuAct(select) {
      return (this.menu = select);
    },
    async getShopListAct(x, y, menu, page, kind) {
      try {
        await kakaoApi.shopFetch(x, y, menu, page, kind).then((res) => {
          this.list = res.data.documents;
          this.count = res.data.documents.length;
        });
        for (let i = 0; i < this.count; i++) {
          await kakaoApi.shopImgFetch(this.list[i].place_name).then((res) => {
            this.img.push(res.data.documents[0].thumbnail_url);
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});
