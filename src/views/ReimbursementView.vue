<template>
  <strong>Instructions: </strong> please fill in all required forms and send
  them back to Ingrid Richey (<a href="mailto:irichey@uci.edu"
    >irichey@uci.edu</a
  >).
  <ol>
    <li v-for="document in documents" :key="document">
      <div class="reimbursement-document hover-shadow">
        <a :href="document" target="_blank">{{
          document.split("/")[1].split(".")[0].replaceAll("_", " ")
        }}</a>
      </div>
    </li>
  </ol>
</template>

<style>
.reimbursement-document a {
  text-transform: capitalize;
  color: blue;
}

.reimbursement-document:visited {
  color: blue;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";

export default defineComponent({
  setup: () => {
    return {
      documents: config.reimbursementDocuments,
    };
  },
});
</script>
