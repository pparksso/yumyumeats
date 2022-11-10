<template>
  <div class="locationBox">
    <span class="material-icons"> gps_fixed </span><span class="region">{{ address }}</span>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { gpsStore } from "../../store/gps";
const gps = gpsStore();
const { address } = storeToRefs(gps);
</script>

<style lang="scss" scoped>
.locationBox {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  padding: 10px;
  color: #9a9a9a;

  .material-icons {
    font-size: $fontSmall;
  }
  .region {
    font-size: 11px;
    display: inline-block;
    margin-left: 3px;
    word-spacing: 0.5;
  }
}
</style>
