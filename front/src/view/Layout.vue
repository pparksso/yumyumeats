<template>
  <router-view></router-view>
</template>

<script setup>
import { gpsStore } from "../store/gps";
import { onBeforeRouteUpdate } from "vue-router";
const gps = gpsStore();

onBeforeRouteUpdate((to, from) => {
  if (to.path !== from.path) {
    gps.clearList();
  }
});

//현재 위치 불러오기
gps.getAreaAct();
</script>

<style scope lang="scss"></style>
