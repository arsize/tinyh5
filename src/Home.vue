<script setup lang="ts">
import {
  NConfigProvider,
  darkTheme,
  zhCN,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutSider,
} from "naive-ui"
import Footer from "@/views/Footer.vue"
import Header from "./views/Header.vue"
</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN">
    <n-layout style="height: 100vh">
      <n-layout-header style="height: 63px" bordered>
        <Header></Header>
      </n-layout-header>
      <n-layout position="absolute" style="top: 63px" has-sider>
        <n-layout-sider
          collapse-mode="width"
          :collapsed-width="15"
          :width="272"
          :show-collapsed-content="false"
          show-trigger="arrow-circle"
          content-style="padding: 24px;"
          bordered
          :native-scrollbar="false"
        >
          <div class="menu">
            <div>抽奖转盘</div>
            <div>邀请函</div>
          </div>
        </n-layout-sider>
        <n-layout-content content-style="padding-top: 24px;">
          <Footer></Footer>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<style scoped lang="less">
.menu {
  width: 206px;
}
</style>
