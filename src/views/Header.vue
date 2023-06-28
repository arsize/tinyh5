<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="ui-logo">
      <img class="logo" src="../assets/accordion.svg" alt="" />
      <span>TinyH5</span>
    </div>
    <div class="page">
      <div class="menu-item">首页</div>
      <div class="menu-item">模版</div>
      <div class="menu-item">组件</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 32px;
  .ui-logo {
    display: flex;
    align-items: center;
    position: absolute;
    left: 32px;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 18px;
    cursor: pointer;
    font-family: v-sans, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    line-height: 1.6;
    text-size-adjust: 100%;
    .logo {
      width: 32px;
      height: 32px;
      margin-right: 12px;
    }
  }
  .page {
    display: flex;
    position: absolute;
    left: 300px;
    top: 50%;
    transform: translate(0, -50%);
    .menu-item {
      padding: 0 20px;
      border-bottom: 2px solid #0000;
      cursor: pointer;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.82);
    }
  }
}
</style>
