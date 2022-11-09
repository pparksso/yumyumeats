<template>
  <div class="container">
    <div class="menuList">
      <div class="title">
        <h1>어떤 메뉴를 찾으시나요?</h1>
      </div>
      <Menu />
    </div>
  </div>
</template>

<script setup>
import Menu from "../components/main/Menu.vue";
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
  .title {
  }
}
</style>
