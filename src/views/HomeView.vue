<template>
  <div>
    <h1>Dates and Location</h1>
    <p>
      The {{ numberOfSeminar }} SCGAS will be held at the University of
      California Irvine on {{ from }} and {{ to }}.
    </p>
    <p>
      Graduate students and  recent Ph.D's  are
      especially encouraged to participate and apply for travel support.
    </p>
  </div>

  <div>
    <h1>Speakers</h1>
    <ul>
      <li v-for="speaker in speakers" :key="speaker.name">
        <a :href="speaker.link">{{ speaker.name }}</a> ({{ speaker.institute }})
      </li>
    </ul>
  </div>

  <div>
    <h1>Registration</h1>
    <p>
      Conference participants are requested to register in advance using the
      <a :href="registrationUrl" target="_blank">online registration form</a>.
    </p>
    <p>
      There will be $15 registration fee to cover refreshments during the
      Saturday morning registration.
      <a :href="feeUrl" target="_blank">
        Please pay the fee here using your credit card.</a
      >
    </p>
  </div>

  <div>
    <h1>Conference Support</h1>
    <p>
      The SCGAS conferences have been continuously funded by the National
      Science Foundation.
    </p>
    <p>
      The NSF funds provide support for the travel and conference expenses of
      participants with priority given to graduate students and recent Ph.D's. If you would like to apply for support,
      please register and request financial support using the online
      registration form before {{ registrationEndsAt }}.
    </p>
  </div>

  <div>
    <h1>Organizing Committee</h1>
    <ul>
      <li v-for="member in organizingCommittee" :key="member.name">
        <a :href="member.link">{{ member.name }}</a> ({{ member.institute }})
      </li>
    </ul>
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
import {
  getSortedOrganizingCommittee,
  getSortedSpeakers,
  ordinalize,
} from "@/utils";

const numberOfSeminar = ordinalize(config.number);
const formatter = new Intl.DateTimeFormat("us", {
  month: "long",
  year: "numeric",
  day: "numeric",
  weekday: "long",
});
const from = formatter.format(new Date(config.duration.from));
const to = formatter.format(new Date(config.duration.to));
const speakers = getSortedSpeakers();
const registrationUrl = config.registrationUrl;
const feeUrl = config.feeUrl;
const registrationEndsAt = formatter.format(
  new Date(config.registrationEndsAt)
);
const organizingCommittee = getSortedOrganizingCommittee();

export default defineComponent({
  setup() {
    return {
      numberOfSeminar,
      from,
      to,
      speakers,
      registrationUrl,
      feeUrl,
      registrationEndsAt,
      organizingCommittee,
    };
  },
});
</script>
