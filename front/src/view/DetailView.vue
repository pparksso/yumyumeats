<template>
  <Location />
  <div class="container">
    <div class="inner">
      <div class="imgBox">
        <img :src="img[idx]" :alt="list[idx].place_name" />
      </div>
      <div class="descBox">
        <h1>{{ list[idx].place_name }}</h1>
        <a href="tel:`${list[idx].phone}`">{{ list[idx].phone }}</a>
        <p>{{ list[idx].address_name }}</p>
      </div>
      <Map :id="Number(route.params.id)" :address="list[idx].address_name" :place="list[idx].place_name" />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "../components/common/Footer.vue";
import Location from "../components/common/Location.vue";
import Map from "../components/detail/Map.vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { gpsStore } from "../store/gps";
const gps = gpsStore();
const { idx, list, img } = storeToRefs(gps);
const route = useRoute();
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
}
</style>
