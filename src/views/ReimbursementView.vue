<template>
  <strong>Instructions: </strong> please fill in all required forms and send
  them back to Ingrid Richey (irichey@uci.edu).
  <ol>
    <li v-for="document in documents" :key="document">
      <div class="reimbursement-document hover-shadow">
        <a :href="document" target="_blank">{{
          document.split(".")[0].replaceAll("_", " ")
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

export default defineComponent({
  setup: () => {
    return {
      documents: [
        "travelers_guidelines_2022.pdf",
        "certificate_of_academic_activity.pdf",
        "travel_reimbursement_form.pdf",
        "mileage_log_sheet.pdf",
      ],
    };
  },
});
</script>
