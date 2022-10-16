<template>
  <h1>Program</h1>
  <div id="program">
    <table cellpadding="5">
      <tr>
        <td colspan="3" style="text-align: center">
          <strong>Schedule</strong> (All talks are taken at
          {{ seminarLocation }})
        </td>
      </tr>
      <tr>
        <th colspan="3">{{ from }}</th>
      </tr>
      <tr v-for="event in firstDaySchedule" :key="event.time">
        <td>{{ event.time }}</td>
        <td>
          <strong v-if="event.isSpeech">{{ event.activity }}</strong>
          <span v-else>{{ event.activity }}</span>
        </td>
      </tr>
      <tr>
        <th colspan="3">&nbsp;</th>
      </tr>
      <tr>
        <th colspan="3">{{ to }}</th>
      </tr>
      <tr v-for="event in secondDaySchedule" :key="event.time">
        <td>{{ event.time }}</td>
        <td>
          <strong v-if="event.isSpeech">{{ event.activity }}</strong>
          <span v-else>{{ event.activity }}</span>
        </td>
      </tr>
    </table>
  </div>
  <div class="divider"></div>
  <h1>Titles and Abstracts (Ordered by Time)</h1>
  <div>
    <div v-for="speech in speeches" :key="speech.time">
      <div>
        <strong>{{ speech.activity }}</strong
        >, {{ speech.title }}
      </div>
      <div class="divider"></div>
      <p>{{ speech.abstract }}</p>
    </div>
  </div>
</template>

<style>
#program table {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";

const formatter = new Intl.DateTimeFormat("us", {
  month: "long",
  year: "numeric",
  day: "numeric",
  weekday: "long",
});

const from = formatter.format(new Date(config.duration.from));
const to = formatter.format(new Date(config.duration.to));

const firstDaySchedule = config.schedule.firstDay;
const secondDaySchedule = config.schedule.secondDay;
const speeches = [...firstDaySchedule, ...secondDaySchedule].filter(
  (i) => i.isSpeech
);

export default defineComponent({
  setup: () => {
    return {
      seminarLocation: config.location,
      from,
      to,
      firstDaySchedule,
      secondDaySchedule,
      speeches,
    };
  },
});
</script>
