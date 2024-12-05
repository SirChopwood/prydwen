<script setup lang=ts>
import {useHead} from '@unhead/vue'

useHead({
  title: 'Faction Score Overlay - Fireside Chat',
  script: [
    {src: "https://code.jquery.com/jquery-3.6.0.js", async: true, defer: true, onload: () => {
        // @ts-ignore
        setup()
      }
    }
  ]
})
</script>

<template>
  <div class="fixed w-[1920px] h-[1080px] top-0 left-0 charm-bold text-4xl text-center text-black text-left">
    <div class="flex flow-row">
      <div class="relative w-[8%] h-fit translate-x-40 translate-y-40">
        <img src="/images/totless/MimisOverlay.png" class="">
        <div id="MimisScore" class="absolute bottom-6 left-[50%] -translate-x-[50%] -rotate-6 w-[80%] h-[30%]">1234</div>
      </div>
      <div>
        <img src="/images/totless/TotlessChristmasRedOutline.png" class="">
      </div>
      <div class="relative w-[9%] h-fit -translate-x-40 translate-y-32">
        <img src="/images/totless/FriesOverlay.png" class="">
        <div id="FriesScore" class="absolute bottom-6 left-[50%] -translate-x-[50%] w-[80%] h-[30%]">1234</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "factionscores"
}
let MimisScore
let FriesScore

function setup() {
  $.ajaxSetup({
    headers: {"Content-type": "application/json"}
  })
  MimisScore = $("#MimisScore")
  FriesScore = $("#FriesScore")
  setInterval(refreshData, 5000)
}

function refreshData() {
  $.post("https://api.louismayes.xyz/factions", JSON.stringify({ "guildId": "645894488232951835" }), async function (data, status, xhr) {
    if (xhr.status == 200) {
      for (let factionId of Object.keys(data)) {
        if (factionId === "10") { // Team Mimis
          MimisScore.text(data[factionId].score)
        } else if (factionId === "11") { // Team Fries
          FriesScore.text(data[factionId].score)
        }
      }
    } else if (xhr.status == 204) {
        MimisScore.text("")
        FriesScore.text("")
    }
  }).fail(function() {
    console.log("Error - Cannot connect to server!")
  });
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap');

.charm-regular {
  font-family: "Charm", cursive;
  font-weight: 400;
  font-style: normal;
}

.charm-bold {
  font-family: "Charm", cursive;
  font-weight: 700;
  font-style: normal;
}
</style>