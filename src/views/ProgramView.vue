<template>
  <h1>Program</h1>
  <div id="program">
    <table cellpadding="5">
      <tr>
        <td colspan="2" style="text-align: center">
          <strong>Schedule</strong> (All talks are taken at
          <a :href="seminarLocation.link">{{ seminarLocation.room }}</a
          ><span>, {{ seminarLocation.description }})</span>
        </td>
      </tr>
      <tr>
        <th colspan="2">{{ from }}</th>
      </tr>
      <tr v-for="event in firstDaySchedule" :key="event.time">
        <td class="scheduled-time">{{ event.time }}</td>
        <td>
          <span v-if="event.isSpeech">
            <span v-if="isReleased">
              <a :href="event.videoUrl">
                <strong>{{ event.activity }}</strong> </a
              >, {{ event.title }}
            </span>
          </span>
          <span v-else>{{ event.activity }}</span>
        </td>
      </tr>
      <tr>
        <th colspan="2">&nbsp;</th>
      </tr>
      <tr>
        <th colspan="2">{{ to }}</th>
      </tr>
      <tr v-for="event in secondDaySchedule" :key="event.time">
        <td class="scheduled-time">{{ event.time }}</td>
        <td>
          <span v-if="event.isSpeech">
            <span v-if="isReleased">
              <a :href="event.videoUrl">
                <strong>{{ event.activity }}</strong></a
              >, {{ event.title }}
            </span>
          </span>
          <span v-else>{{ event.activity }}</span>
        </td>
      </tr>
    </table>
  </div>
  <div class="divider"></div>
  <h1>Titles and Abstracts <span v-if="isReleased"> </span></h1>
  <div>
    <div v-for="speech in speechesOrdered" :key="speech.time">
      <div>
        <a :href="speech.videoUrl">
          <strong>{{ speech.activity }}</strong
          >, {{ speech.title }}</a
        >
      </div>
      <div class="divider"></div>
      <!-- <p style="white-space: pre-line">{{ speech.abstract }}</p> -->
      <p
        v-html="renderedAbstract(speech.abstract)"
        class="abstract-content"
      ></p>
    </div>
  </div>
</template>
<style>
#program table {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

#program .scheduled-time {
  width: 150px;
}
/* for katex style */
#program .abstract-content {
  white-space: pre-line;
  word-wrap: break-word;
  font-size: 1rem;
  line-height: 1.5;
}

#program .abstract-content .katex {
  font-size: 1em !important;
}
#program .abstract-content .katex-display {
  display: block;
  text-align: center;
  margin: 10px 0;
}
</style>
<!-- add katex -->
<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";
import katex from "katex";
import "katex/dist/katex.min.css";

export default defineComponent({
  setup() {
    const renderedAbstract = (abstract: string) => {
      const formattedAbstract = abstract
        .replace(/\n/g, " <br> ")
        .replace(/\$(.*?)\$/g, (_, match) =>
          katex.renderToString(match, {
            throwOnError: false,
            displayMode: false,
            output: "html",
          })
        )
        .replace(/\$\$(.*?)\$\$/g, (_, match) =>
          katex.renderToString(match, {
            throwOnError: false,
            displayMode: true,
            output: "html",
          })
        );

      return formattedAbstract;
    };
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

    const speechesOrdered = speeches.sort((a, b) =>
      a.activity
        .split(" ")
        .slice(-1)[0]
        .localeCompare(b.activity.split(" ").slice(-1)[0])
    );

    return {
      seminarLocation: config.location,
      from,
      to,
      firstDaySchedule,
      secondDaySchedule,
      speeches,
      speechesOrdered,
      isReleased: true,
      renderedAbstract,
    };
  },
});
</script>
