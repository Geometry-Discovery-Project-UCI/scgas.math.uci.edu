<template>
  <AppHeader></AppHeader>
  <div class="divider"></div>
  <div id="main-content">
    <AppSider style="flex: 2"></AppSider>
    <div class="divider"></div>
    <AppContent style="flex: 7">
      <RouterView></RouterView>
    </AppContent>
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
</style>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppSider from "./AppSider.vue";
import AppContent from "./AppContent.vue";
</script>
