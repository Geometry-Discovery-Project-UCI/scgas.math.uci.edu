<template>
  <h1>Transportation</h1>
  <h2>Airports</h2>
  <p>
    The University of California at Irvine is centrally located in southern
    California. The most convenient and nearby airport is the John Wayne Orange
    County Airport (SNA) which is about a short 10-15 minute drive from campus.
    Most hotels in Irvine have shuttle services which can pick you up directly
    from SNA.
  </p>
  <p>
    Two alternative airports are the Long Beach Airport (LGB), about a 30-minute
    drive from campus, and the Los Angeles International Airport (LAX), about a
    50-minute drive away. If arriving from LAX, taxi service is available to
    Irvine which will cost approximately $100. Also there are many shuttle
    services which can take you from LAX to Irvine, for instance the
    <a href="https://www.supershuttle.com/" target="_blank">Super Shuttle</a>.
  </p>
  <h2>Campus Map and Parking</h2>
  <p>
    The talks will take place in the
    <a :href="seminarLocation.link">{{ seminarLocation.room }}</a>
    which you can locate on the
    <a
      href="https://web.communications.uci.edu/assets/email/dfa-tds/TDS-Website/maps/Main_UCI-Map-REV012520-24.pdf"
      target="_blank"
      >campus map (Building 419, Coordinates F5)</a
    >.
  </p>
  <p>
    The parking structure that is closest to {{ seminarLocation.room }} is
    Parking Lot 16, with parking dispensor. Single-day parking permits are also
    available for purchase online. On weekends, you can park in the general
    parking spots with $13 one-day permit. For participants from other UC
    campuses, the parking permit from your home institution may be valid at UC
    Irvine. Please see the
    <a
      href="http://www.parking.uci.edu/permits/visitorpermits.cfm"
      target="_blank"
      >UC Irvine Visitor Parking</a
    >
    website or call the parking office at (949) 824-7275 for more information.
  </p>
</template>

<style>
h2 {
  font-size: 20px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";

export default defineComponent({
  setup: () => {
    return {
      seminarLocation: config.location,
    };
  },
});
</script>
