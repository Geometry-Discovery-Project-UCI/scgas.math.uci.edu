<template>
  <div>Please register on the pop up page.</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";

export default defineComponent({
  mounted: () => {
    window.open(config.registrationUrl, "_blank");
  },
});
</script>
