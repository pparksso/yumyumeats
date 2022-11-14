<template>
  <a :href="`https://map.kakao.com/link/to/${id}`">
    <div id="map"></div>
  </a>
</template>

<script setup>
import { onMounted, watch } from "vue";

const props = defineProps({
  id: Number,
  address: String,
  place: String,
});
onMounted(() => {
  // let map = ref();
  // let geocoder = ref();
  watch(props, (newProps) => {
    const script = document.createElement("script");
    /* global kakao */
    script.onload = () => kakao.maps.load(initMap);
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=${import.meta.env.VITE_APP_KEY}`;
    document.head.appendChild(script);

    const initMap = () => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      let map = new kakao.maps.Map(container, options);
      let geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(newProps.address, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          let marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });
          let infowindow = new kakao.maps.InfoWindow({
            content: `<div class="infowindow" style="min-width:150px;text-align:center;padding:10px 0;">${newProps.place}</div>`,
          });
          infowindow.open(map, marker);
          map.setCenter(coords);
        } else {
          console.log(status);
        }
      });
    };
  });
});
</script>
<style lang="scss" scoped>
#map {
  width: 80vw;
  height: 80vw;
}
</style>
