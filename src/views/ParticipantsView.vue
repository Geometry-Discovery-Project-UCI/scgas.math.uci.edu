<template>
  <h1>Participants</h1>
  <div id="participants">
    <table cellpadding="5">
      <thead>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Institute</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="participant in participants" :key="participant.name">
          <td>{{ participant.name.split(" ").slice(1).join(" ") }}</td>
          <td>{{ participant.name.split(" ")[0] }}</td>
          <td>{{ participant.institute }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
#participants table {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

#participants table,
th,
td {
  border: 1px solid black;
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
