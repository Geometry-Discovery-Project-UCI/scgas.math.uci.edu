<template>
  <div id="header">
    <h1>
      The {{ numberOfSeminar }} Southern California Geometric Analysis Seminar
    </h1>
    <h2>University of California, Irvine</h2>
    <h2 style="margin-bottom: 18px">{{ from }} - {{ to }}</h2>
  </div>
</template>

<style>
#header {
  border-radius: 12px;
  background-color: rgb(235, 198, 146);
  display: flex;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
  font-family: Comic Sans MS;
}

#header > h1 {
  font-size: 24px;
  color: rgb(3, 25, 149);
  margin-top: 18px;
}

#header > h2 {
  font-size: 18px;
  margin: 6px;
}
</style>

<script setup lang="ts">
import config from "@/config.json";
import { ordinalize } from "@/utils/index";

const numberOfSeminar = ordinalize(config.number);
const formatter = new Intl.DateTimeFormat("us", {
  month: "long",
  year: "numeric",
  day: "numeric",
});
const from = formatter.format(new Date(config.duration.from));
const to = formatter.format(new Date(config.duration.to));
</script>
