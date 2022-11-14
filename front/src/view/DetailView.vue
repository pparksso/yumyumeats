<template>
  <Location />
  <div class="container">
    <div class="empty" v-if="empty">가게를 찾을 수 없어요😭</div>
    <div class="inner" v-else>
      <div class="imgBox">
        <a :href="url"><img :src="img[idx]" :alt="name" /></a>
      </div>
      <div class="descBox">
        <a :href="url">
          <h1>{{ name }}</h1>
        </a>
        <a href="tel:`${phone}`">{{ phone }}</a>
        <p>{{ address }}</p>
      </div>
      <Map :id="Number(route.params.id)" :address="address" :place="name" />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "../components/common/Footer.vue";
import Location from "../components/common/Location.vue";
import Map from "../components/detail/Map.vue";
import kakaoApi from "../api/kakao";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { gpsStore } from "../store/gps";
import { watch } from "@vue/runtime-core";
import { ref } from "vue";
const gps = gpsStore();
const { list, idx, img } = storeToRefs(gps);
const route = useRoute();

let name = ref();
let phone = ref();
let address = ref();
let url = ref();
let empty = ref(false);

watch(idx, (newIdx) => {
  kakaoApi
    .placeFetch(list.value[newIdx].place_name)
    .then((res) => {
      const data = res.data.documents;
      const place = data.filter((i) => {
        return i.id == route.params.id;
      });
      if (place.length == 0) {
        empty.value = true;
      } else {
        name.value = place[0].place_name;
        phone.value = place[0].phone;
        address.value = place[0].road_address_name;
        url.value = place[0].place_url;
      }
    })
    .catch((err) => console.log(err));
});
</script>

<style lang="scss" scoped>
.container {
  margin: 20px 20px 0 20px;
  .inner {
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 70px;
    .imgBox {
      img {
        border-radius: 15px;
        width: 50vw;
      }
    }
    .descBox {
      margin: 20px 0;
      h1 {
        @include title;
      }
      p,
      a {
        line-height: 2;
        font-size: $fontSmall;
        word-spacing: 1.5px;
      }
    }
  }
  .empty {
    height: calc(100vh - 46px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
</style>
