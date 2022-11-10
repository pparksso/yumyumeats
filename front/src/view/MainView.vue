<template>
  <div class="container">
    <div class="menuList">
      <Location />
      <div class="title">
        <h1>어떤 메뉴를 찾으시나요?</h1>
      </div>
      <Menu />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Menu from "../components/main/Menu.vue";
import Footer from "../components/common/Footer.vue";
import Location from "../components/common/Location.vue";
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  background-color: #fff;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 30px 15px 10px 15px;
  .title {
    @include title;
  }
}
</style>
