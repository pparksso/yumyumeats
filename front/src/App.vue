<template>
  <router-view></router-view>
</template>

<script setup></script>
<style lang="scss">
@import url("~reset-css/reset.css");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
@font-face {
  font-family: "OKDDUNG";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/OKDDUNG.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: "Noto Sans KR", sans-serif;
}
body {
  overflow-x: hidden;
  color: #333;
  background: $backgroundColor;
  box-sizing: border-box;
  font-weight: 500;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
