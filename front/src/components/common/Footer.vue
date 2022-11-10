<template>
  <div class="footer">
    <ul>
      <li><span class="material-icons"> reorder </span></li>
      <li @click="main()"><span class="material-icons"> crop_square </span></li>
      <li @click="back()"><span class="material-icons"> chevron_left </span></li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function back() {
  router.back();
}
function main() {
  router.push("/");
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  border-top: 1px solid $borderColor;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  padding: 10px 0;
  ul {
    margin: 0 auto;
    width: 65%;
    display: flex;
    justify-content: space-between;
    li {
      .material-icons {
        color: #9a9a9a;
      }
    }
  }
}
</style>
