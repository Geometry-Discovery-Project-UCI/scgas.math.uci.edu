<template>
  <AppLayout> </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/components/AppLayout.vue";

export default defineComponent({
  components: { AppLayout },
});
</script>

<style>
html {
  background-color: rgb(16, 31, 102);
}
</style>
