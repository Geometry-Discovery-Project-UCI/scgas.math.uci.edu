<template>
  <div id="sider">
    <div v-for="route in routes" :key="route.name">
      <div style="border-bottom: 1px solid #000000">
        <RouterLink class="nav-item" :to="route.path">{{
          route.name
        }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
#sider {
  border-radius: 12px;
  background-color: rgb(248, 228, 198);
  padding: 6px;
  font-family: Comic Sans MS Comic Sans, cursive;
}

.nav-item {
  text-transform: capitalize;
  text-decoration: none;
  font-size: 20px;
  color: rgb(6, 32, 144);
}

.nav-item:hover {
  text-shadow: 2px 2px 4px #000000;
}

.nav-item:visited {
  color: rgb(6, 32, 144);
}
</style>

<script setup lang="ts">
import { routes as rawRoutes } from "@/router";
const routes = rawRoutes.filter(
  (e) => !e.redirect && e.name != "reimbursement"
);
</script>
