<script setup lang=ts>
import {useHead} from '@unhead/vue'

useHead({
  title: 'Faction Score Overlay',
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
    <div class="absolute w-[6%] h-fit bottom-0 left-2 bg-black rounded-full">
      <img src="/images/totless/ModCorp_Animated.gif" class="">
      <div class="absolute w-40 h-fit text-left left-[100%] bottom-0 flex flex-col *:-my-1">
        <div class="text-3xl font-black MainGlow">15000</div>
        <div class="text-lg SubGlow">To beat... or else...</div>
      </div>
    </div>
    <div class="absolute w-[8%] h-fit bottom-0 right-20">
      <img src="/images/totless/MimisOverlay.png" class="scale-x-[-1]">
      <div id="MimisScore" class="absolute bottom-6 left-[50%] -translate-x-[50%] rotate-6 w-[80%] h-[30%]">1234</div>
    </div>
    <div class="absolute w-[9%] h-fit bottom-0 right-0">
      <img src="/images/totless/FriesOverlay.png" class="">
      <div id="FriesScore" class="absolute bottom-6 left-[50%] -translate-x-[50%] w-[80%] h-[30%]">1234</div>
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
        if (factionId === "12") { // Team Mimis
          MimisScore.text(data[factionId].score)
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

.MainGlow {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #8c8c8c, 0 0 40px #8c8c8c, 0 0 50px #8c8c8c, 0 0 60px #8c8c8c, 0 0 70px #8c8c8c;
}

.SubGlow {
  text-shadow: 0 0 10px #ffffff44, 0 0 20px #ffffff44, 0 0 30px #8c8c8c44, 0 0 40px #8c8c8c44, 0 0 50px #8c8c8c44, 0 0 60px #8c8c8c44, 0 0 70px #8c8c8c44;
}
</style>