<template>
  <div id="wrapper">
    <AppHeader></AppHeader>
    <div class="divider"></div>
    <div id="main-content">
      <AppSider style="flex: 2"></AppSider>
      <div class="divider"></div>
      <AppContent style="flex: 7">
        <RouterView></RouterView>
      </AppContent>
    </div>
  </div>
</template>

<style>
.divider {
  margin: 12px 6px;
}

#main-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#wrapper {
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 960px) {
  #wrapper {
    width: 75vw;
  }
}
</style>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppSider from "./AppSider.vue";
import AppContent from "./AppContent.vue";
</script>
