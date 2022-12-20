<template>
  <a :href="posterUrl" target="_blank"
    >Click here if poster is not popped up.</a
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";

export default defineComponent({
  setup: () => {
    return {
      posterUrl: config.posterUrl,
    };
  },
  mounted: () => {
    window.open(config.posterUrl, "_blank");
  },
});
</script>
