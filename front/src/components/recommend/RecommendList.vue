<template>
  <div class="list" v-if="list.length > 0">
    <ul>
      <li
        v-for="(item, idx) in list"
        :key="item"
        @click="
          gps.getIdxAct(idx);
          transmitData(item.place_name);
        "
      >
        <router-link :to="`/detail/${item.id}`">
          <div class="linkBox">
            <div class="locationBox">
              <span class="material-icons"> location_on </span>
            </div>
            <div class="descBox">
              <h2>{{ item.place_name }}</h2>
            </div>
            <div class="infoBox">
              <p>{{ item.road_address_name }}</p>
              <span class="phone">{{ item.phone ? item.phone : "-" }}</span
              ><span class="distance">{{ item.distance }} m</span>
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
import { getCurrentInstance } from "vue";
const internalInstance = getCurrentInstance();
const emitter = internalInstance.appContext.config.globalProperties.emitter;

function transmitData(data) {
  emitter.emit("placeName", data);
}
const gps = gpsStore();
const { list } = storeToRefs(gps);
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
        padding: 30px 0 30px 70px;
        position: relative;
        .locationBox {
          position: absolute;
          top: 30px;
          left: 30px;
          .material-icons {
            font-size: 20px;
          }
        }
        .descBox {
          h2 {
            font-size: $fontLarge;
            font-weight: 700;
            margin-bottom: 20px;
          }
        }
        .infoBox {
          font-size: $fontSmall;
          color: #aaa;
          p {
            margin-bottom: 5px;
          }
          span {
            display: inline-block;
            &.phone {
              padding-right: 10px;
              position: relative;
              &::after {
                content: "";
                display: block;
                position: absolute;
                width: 1px;
                background-color: #aaa;
                height: 100%;
                top: 0;
                right: 0;
              }
            }
            &.distance {
              padding-left: 10px;
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
