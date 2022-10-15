<template>
  <div>
    <h1>Dates and Location</h1>
    <p>
      The {{ numberOfSeminar }} SCGAS will be held at the University of
      California Irvine on {{ from }} and {{ to }}.
    </p>
    <p>
      Graduate students, recent Ph.D's, and under-represented minorities are
      especially encouraged to participate and apply for travel support.
    </p>
    <p>
      This year, there will also be a related winter school at UC Irvine right
      before the SCGAS conference.
    </p>
  </div>
</template>

<style>
h1 {
  font-size: 24px;
  margin-top: 0px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";
import { ordinalize } from "@/utils";

const numberOfSeminar = ordinalize(config.number);
const formatter = new Intl.DateTimeFormat("us", {
  month: "long",
  year: "numeric",
  day: "numeric",
  weekday: "long",
});
const from = formatter.format(new Date(config.duration.from));
const to = formatter.format(new Date(config.duration.to));

export default defineComponent({
  setup() {
    return {
      numberOfSeminar,
      from,
      to,
    };
  },
});
</script>
