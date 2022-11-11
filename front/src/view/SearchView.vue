<template>
  <div class="container">
    <Location />
    <div class="searchHeader">
      <div class="title"><h1>메뉴별 맛집 찾기</h1></div>
      <div class="nav">
        <ul>
          <li v-for="m in menus" :key="m" :class="{ active: m == menu }" @click="">
            <span>{{ m }}</span>
          </li>
        </ul>
      </div>
    </div>
    <SearchBox />
  </div>
</template>

<script setup>
import SearchBox from "../components/search/SearchBox.vue";
import Location from "../components/common/Location.vue";
import { gpsStore } from "../store/gps";
import { storeToRefs } from "pinia";
const gps = gpsStore();
const { menu } = storeToRefs(gps);
const menus = ["전체", "한식", "중식", "일식", "아시안/양식", "분식", "패스트푸드", "치킨", "카페", "술", "기타", "추천"];
</script>

<style lang="scss" scoped>
.container {
  .searchHeader {
    @include header;
    padding-bottom: 0;
    .title {
      @include title;
    }
    .nav {
      margin-top: 20px;
      ul {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        -ms-overflow-style: none; /* IE, Edge */
        scrollbar-width: none; /* Firefox */
        ::-webkit-scrollbar {
          display: none;
        }
        li {
          width: 100%;
          white-space: nowrap;
          padding: 0 10px 15px 10px;
          position: relative;
          &.active {
            color: $mainColor;
            &::after {
              content: "";
              display: block;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 3px;
              background-color: $mainColor;
            }
          }
          span {
            display: inline-block;
            font-size: $fontSmall;
          }
        }
      }
    }
  }
}
</style>
