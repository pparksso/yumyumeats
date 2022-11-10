<template>
  <div class="list">
    <ul>
      <li v-for="(item, idx) in list" :key="item">
        <div class="imgBox">
          <img :src="img[idx]" :alt="item.place_name" />
        </div>
        <div class="descBox">
          <h2>{{ item.place_name }}</h2>
          <p>{{ item.distance }} <span>m</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// import { watch } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { gpsStore } from "../../store/gps";
const gps = gpsStore();
const { x, y, menu, list, img } = storeToRefs(gps);

if (menu == "카페") {
  gps.getShopListAct(x.value, y.value, menu.value, 1, "CE7");
} else {
  gps.getShopListAct(x.value, y.value, menu.value, 1, "FD6");
}

// watch(menu, (newMenu) => {
//   if (newMenu == "카페") {
//     return gps.getShopListAct(x, y, newMenu, 1, "CE7");
//   } else {
//     return gps.getShopListAct(x, y, newMenu, 1, "FD6");
//   }
// });
</script>

<style lang="scss" scoped>
.list {
  ul {
    li {
      display: flex;
      padding: 30px 20px;
      border-bottom: 1px solid $borderColor;
      .imgBox {
        img {
          width: 100px;
          border-radius: 15px;
        }
      }
      .descBox {
        margin: 15px 0 0 20px;
        h2 {
          font-size: $fontNomal;
          font-weight: 700;
          margin-bottom: 20px;
        }
        p {
          font-size: 15px;
          span {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
