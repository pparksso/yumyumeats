<template>
  <div class="searchBox">
    <!-- <div class="sortWrap">
      <ul>
        <div class="sortTitle"><span>정렬</span><span class="material-icons"> expand_more </span></div>
        <li><span>가까운 순</span></li>
        <li><span>인기순</span></li>
      </ul>
    </div> -->
    <SearchList />
  </div>
  <Footer />
</template>

<script setup>
import SearchList from "./SearchList.vue";
import Footer from "../common/Footer.vue";
</script>

<style lang="scss" scoped>
.searchBox {
  background-color: #fff;
  margin: 20px 0;
  border-radius: 10px;
  padding: 20px 0;
  .sortWrap {
    font-size: $fontSmall;
    position: relative;
    ul {
      position: absolute;
      z-index: 1;
      .sortTitle {
        padding: 10px;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        background-color: $backgroundColor;
        .material-icons {
          font-size: $fontSmall;
          margin-left: 10px;
        }
      }
      li {
        /* display: none; */
        background-color: $backgroundColor;
        padding: 10px;
        &:last-child {
          border-radius: 0 0 10px 10px;
        }
      }
    }
  }
}
</style>
