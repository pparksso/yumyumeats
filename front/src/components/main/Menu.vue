<template>
  <div class="menu">
    <ul>
      <li
        v-for="(m, i) in menus"
        :key="m"
        @click="
          gps.getMenuAct(m);
          router.push('/search');
        "
      >
        <div class="imgBox"><img :src="`/assets/images/${i + 1}.png`" :alt="m" /></div>
        <span>{{ m }}</span>
      </li>
      <li @click="goReccomendPage()">
        <div class="imgBox"><img src="/assets/images/12.png" alt="추천" /></div>
        <span>추천</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { gpsStore } from "../../store/gps";
const gps = gpsStore();
const menus = ["전체", "한식", "중식", "일식", "아시안/양식", "분식", "패스트푸드", "치킨", "카페", "술", "기타"];
const router = useRouter();

function goReccomendPage() {
  router.push("/recommend");
}
</script>

<style lang="scss" scoped>
.menu {
  margin: 15px 0;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      cursor: pointer;
      margin: 10px;
      width: calc(33.33% - 20px);
      display: flex;
      flex-direction: column;
      align-items: center;
      .imgBox {
        background-color: #f8f8f8;
        display: flex;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        &::after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }
        img {
          width: 55px;
        }
      }
      span {
        display: block;
        margin-top: 7px;
        font-size: $fontSmall;
      }
    }
  }
}
</style>
