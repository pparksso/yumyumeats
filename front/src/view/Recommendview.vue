<template>
  <div class="container">
    <div class="recmHeader">
      <div class="title">맛집 추천받기</div>
      <div class="inputBox">
        <label
          ><input type="text" @input="word = $event.target.value" :value="word" @keydown.enter="recommend.getShopListAct(x, y, word, 1, 'FD6')" /><span
            class="material-icons"
            @click="recommend.getShopListAct(x, y, word, 1, 'FD6')"
          >
            search
          </span></label
        >
      </div>
    </div>
  </div>
  <RecommendBox />
  <Footer />
</template>

<script setup>
import RecommendBox from "../components/recommend/RecommendBox.vue";
import Footer from "../components/common/Footer.vue";
import { gpsStore, recommendStore } from "../store/gps";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const recommend = recommendStore();
const gps = gpsStore();
const { x, y } = storeToRefs(gps);

let word = ref("");
</script>

<style lang="scss" scoped>
.container {
  .recmHeader {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    @include header;
    .title {
      @include title;
    }
    .inputBox {
      label {
        display: flex;
        align-items: center;
        input {
          outline: none;
          flex-grow: 1;
          border: 1px solid $borderColor;
          padding: 10px;
          border-radius: 10px;
        }
        .material-icons {
          font-size: 30px;
          display: inline-block;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
