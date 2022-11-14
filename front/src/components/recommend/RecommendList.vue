<template>
  <div class="list" v-if="list.length > 0">
    <ul>
      <li v-for="(item, idx) in list" :key="item" @click="gps.getIdxAct(idx)">
        <router-link :to="`/detail/${item.id}`">
          <div class="linkBox">
            <div class="imgBox">
              <img :src="img[idx]" :alt="item.place_name" />
            </div>
            <div class="descBox">
              <h2>{{ item.place_name }}</h2>
              <p>{{ item.distance }} <span>m</span></p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="empty" v-else><p>메뉴를 검색해주세요😀</p></div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { gpsStore } from "../../store/gps";

const gps = gpsStore();
const { list, img } = storeToRefs(gps);
</script>

<style lang="scss" scoped>
.list {
  ul {
    li {
      border-bottom: 1px solid $borderColor;
      &:last-child {
        border-bottom: none;
      }
      .linkBox {
        cursor: pointer;
        padding: 30px 20px;
        display: flex;
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
}
.empty {
  height: 73vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
