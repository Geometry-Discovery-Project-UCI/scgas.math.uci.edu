<template>
  <h1>Accommodation</h1>
  <p>
    Lodging can be found at various hotels which offer a special UCI corporate
    rate (inquire when you reserve), including
  </p>

  <table cellpadding="5">
    <col width="30%" />
    <col width="70%" />
    <tr>
      <td>
        <b
          ><a
            class="hover-shadow"
            target="_blank"
            href="https://www.ayreshotels.com/"
            >Ayers Hotel at Costa Mesa</a
          ></b
        >
      </td>
      <td>
        Use conference code 14767 "SCGAS - Dept. of Math" to get the University
        rate of $129 per night
      </td>
    </tr>
    <tr>
      <td>
        <b>
          <a
            class="hover-shadow"
            target="_blank"
            href="https://atriumhotel.com/"
            >Atrium Hotel</a
          ></b
        >
      </td>
      <td>Mention "UCI"</td>
    </tr>
    <tr>
      <td>
        <b>
          <a
            class="hover-shadow"
            target="_blank"
            href="https://www.hyatt.com/en-US/hotel/california/hyatt-regency-john-wayne-airport-newport-beach/snarj"
          >
            Hyatt Regency
          </a></b
        >
      </td>
      <td>Mention "UCI"</td>
    </tr>
  </table>
  <p></p>
  <h1>Restaurants</h1>
  <div id="restaurants">
    <table cellpadding="5">
      <tr>
        <th colspan="2" style="font-size: 20px">Lunch</th>
      </tr>
      <tr v-for="lunch in lunchOptions" :key="lunch.name">
        <td>
          <strong>{{ lunch.name }}</strong>
        </td>
        <td>{{ lunch.description }}</td>
      </tr>
      <tr>
        <th colspan="2" style="font-size: 20px">Dinner Near UC Irvine</th>
      </tr>
      <tr v-for="dinner in dinnerOptions" :key="dinner.name">
        <td>
          <strong>{{ dinner.name }}</strong>
        </td>
        <td>{{ dinner.description }}</td>
      </tr>
    </table>
  </div>
</template>

<style>
#restaurants table {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";

export default defineComponent({
  setup: () => {
    return {
      lunchOptions: config.accommodation.lunchOptions,
      dinnerOptions: config.accommodation.dinnerOptions,
    };
  },
});
</script>
