<template>
  <h1>Participants</h1>
  <table>
    <col width="180px" />
    <col width="180px" />
    <col width="480px" />
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Institute</th>
    </tr>
    <tr v-for="participant in participants" :key="participant.name">
      <td>{{ participant.name.split(" ").slice(1).join(" ") }}</td>
      <td>{{ participant.name.split(" ")[0] }}</td>
      <td>{{ participant.institute }}</td>
    </tr>
  </table>
</template>

<style>
table {
  margin-left: auto;
  margin-right: auto;
}

table,
th,
td {
  border: 1px solid black;
}

td {
  white-space: nowrap;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { getSortedParticipants } from "@/utils";

export default defineComponent({
  setup: () => {
    return {
      participants: getSortedParticipants(),
    };
  },
});
</script>
