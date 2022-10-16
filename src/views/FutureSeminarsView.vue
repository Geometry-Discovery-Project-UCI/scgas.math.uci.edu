<template>
  <h1>Future Seminars</h1>
  <p>
    <strong>The {{ numberOfSeminar }} SCGAS</strong> will be held at TBA in
    Winter {{ nextYear }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";
import { ordinalize } from "@/utils";

export default defineComponent({
  setup: () => {
    return {
      numberOfSeminar: ordinalize(config.number + 1),
      nextYear: new Date(config.duration.from).getFullYear() + 1,
    };
  },
});
</script>
