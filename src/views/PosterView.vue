<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";

export default defineComponent({
  mounted: () => {
    window.open(config.posterUrl, "_blank");
  },
});
</script>
