<template>
  <a :href="registrationUrl" target="_blank"
    >Click here if registration form is not popped up.</a
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";

export default defineComponent({
  setup: () => {
    return {
      registrationUrl: config.registrationUrl,
    };
  },
  mounted: () => {
    window.open(config.registrationUrl, "_blank");
  },
});
</script>
