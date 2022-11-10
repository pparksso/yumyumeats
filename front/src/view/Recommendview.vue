<template>
  <div class="container">
    <div class="recmHeader">
      <div class="title">맛집 추천받기</div>
      <div class="inputBox">
        <label><input type="text" /><span class="material-icons"> search </span></label>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  .recmHeader {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
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
