<template>
  <router-view></router-view>
</template>

<script setup>
import { gpsStore } from "../store/gps";
const gps = gpsStore();

//현재 위치 불러오기
gps.getAreaAct();
</script>

<style scope lang="scss"></style>
