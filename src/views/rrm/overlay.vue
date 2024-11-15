<script setup lang=ts>
import {createApp} from 'vue'
import {useHead} from '@unhead/vue'
import OverlayTape from "@/components/rrm/OverlayTape.vue";

useHead({
  title: 'RRM Overlay',
  script: [
    {src: "https://code.jquery.com/jquery-3.6.0.js", async: true, defer: true, onload: () => {
        // @ts-ignore
        updateTapes()
      }
    },
    {src: "https://code.jquery.com/ui/1.13.2/jquery-ui.js", async: true, defer: true, onload: () => {

      }
    }
  ]
})
</script>

<template>
  <div class="fixed w-[1920px] h-[1080px] top-0 left-0">
    <button class="bg-red-500 rounded-lg m-4 mt-80 px-2 text-white text-lg" @click="updateTapes()">Refresh</button>
    <button class="bg-red-500 rounded-lg m-4 mt-80 px-2 text-white text-lg" @click="bumpTapeList()">Bump Tapes</button>
    <div class="absolute -bottom-[5%] w-full h-[29%]">
      <div class="flex flex-row w-full h-full">
        <div id="tapePlayer" class="w-[25%] -ml-10 h-auto relative">
          <img class="static z-50" src="/images/rrm/overlay/Player.png">
          <div id="tapeTray" class="top-[12%] right-[4%] absolute h-[43%] w-[43%] object-center -z-50">
          </div>

          <div class="bottom-[23%] right-[2%] absolute h-[16%] w-[47%] text-sm flex flex-col leading-4 text-green-400 inconsolata">
            Now Playing...
            <div class="text-left text-nowrap overflow-clip">
              Noisestorm - Crab Rave [Monstercat Release]
            </div>
            <div class="flex flex-row">
              <div class="grow text-left">
                Ramiris_
              </div>
              <div class="text-right">
                URL
              </div>
            </div>
          </div>

  <!--        <div class="top-[15%] left-[16%] absolute w-[29%] aspect-square rounded-full overflow-clip">-->
  <!--          <img src="https://img.youtube.com/vi/LDU_Txk06tM/default.jpg" class="object-cover h-full w-full">-->
  <!--        </div>-->
  <!--        <img src="/images/rrm/overlay/SpeakerDisc.png" class="top-[15%] left-[16%] absolute w-[29%] aspect-square rounded-full">-->

        </div>
        <div id="tapeList" class="flex flex-row grow *:translate-y-20 *:-rotate-[30deg] self-end pl-8 overflow-clip h-full">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {createApp} from "vue";
  import OverlayTape from "@/components/rrm/OverlayTape.vue";

  export default {
    name: "rrm_overlay",
    mounted() {
    }
  }

  let requestList = []
  requestList.push({songname:"Noisestorm - Crab Rave [Monstercat Release]", requester:"Ramiris_", songid:"URL", thumbnail:"https://img.youtube.com/vi/LDU_Txk06tM/default.jpg"})
  requestList.push({songname:"Maroon 5 - Sugar", requester:"Ramiris_", songid:"607", thumbnail:"https://img.youtube.com/vi/yIZ3qtawiK0/default.jpg"})
  requestList.push({songname:"[Kinect Star Wars] I'm Han Solo", requester:"Ramiris_", songid:"2102", thumbnail:"https://img.youtube.com/vi/x_xJqkzngBI/default.jpg"})
  requestList.push({songname:"I WANT IT THAT WAY (Remix) by Backstreet Boys", requester:"Chat", songid:"TEST 4", thumbnail:"https://img.youtube.com/vi/LUoJiTr7LJw/default.jpg"})
  let requestTapes = {}
  let currentIndex = 0

  function createTape(index: string, songname: string, requester: string, songid: string, thumbnail: string) {
    let newTape = createApp(OverlayTape, {
      "songname": songname,
      "requester": requester,
      "songid": songid,
      "thumbnail": thumbnail
    }).mount(document.createElement('div')).$el
    console.log(requestTapes, index)
    requestTapes[index] = newTape
    return newTape
  }

  function updateTapes() {
    // @ts-ignore
    let tray = $("#tapeTray")
    // @ts-ignore
    let tapeList = $("#tapeList")
    for (let reqId in requestList) {
      let reqData = requestList[reqId]
      console.log(reqId, reqData)

      let newTape = requestTapes[reqId]
      if (!newTape) {
        newTape = createTape(reqId, reqData.songname, reqData.requester, reqData.songid, reqData.thumbnail)
      }
      else {
        if (newTape.parentNode) {
          newTape.parentNode.removeChild(newTape)
          newTape.style.margin = "0"
          newTape.style.animation = ""
        }
      }

      if (Number(reqId) == currentIndex) {
        newTape.style.margin = "-28% -43%"
        tray.append(newTape)
        tray.css({"animation": "insert-tape-to-tray 2s"})
      }
      else if (Number(reqId) > currentIndex){
        newTape.style.margin = "0 -7.5rem"
        setTimeout(() => {
          tapeList.append(newTape)
          //$(newTape).css({"animation": "show-tape-in-list 1s"})
          newTape.style.animation = "show-tape-in-list 1s"
        }, (reqId*100)+2000)
      }
    }
    console.log("final", requestTapes)
  }

  function bumpTapeList() {
    // @ts-ignore
    let tray = $("#tapeTray")
    let currentTape = requestTapes[currentIndex]
    currentTape.parentNode.style.animation = "remove-tape-from-tray 1s"
    let nextTape = requestTapes[currentIndex+1]
    nextTape.style.animation = "bump-tape-from-list 1s"
    let placeholder = $(`<div style='width: ${nextTape.offsetWidth}px; margin: 0 -8rem'/>`)
    setTimeout(() => {
      currentTape.parentNode.style.animation = ""
      currentTape.parentNode.removeChild(currentTape)
      nextTape.style.animation = ""
      nextTape.parentNode.replaceChild(placeholder.get(0), nextTape)
      placeholder.animate({"width": "0", "margin": "0"}, 2100, () => {
        placeholder.remove()
      })
      currentIndex += 1;
      tray.append(nextTape)
      nextTape.style.margin = "-28% -43%"
      tray.css({"animation": "insert-tape-to-tray 2s"})
    }, 990)
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Sour+Gummy&display=swap');
.inconsolata {
  font-family: "Inconsolata", monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
      "wdth" 100;
}
.sour-gummy {
  font-family: "Sour Gummy", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
      "wdth" 100;
}

@keyframes insert-tape-to-tray {
  0% {
    opacity: 0;
    transform: translateY(-60%);
  }
  0% {
    transform: translateY(-60%);
  }
  60% {
    opacity: 1;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
     transform: translateY(0);
  }
}

@keyframes remove-tape-from-tray {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-80%);
  }
}

@keyframes show-tape-in-list {
  0% {
    opacity: 0;
    transform: translate(40%, 100%) scale(0.5) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: translate(0, 5rem) scale(0.5) rotate(-30deg);
  }
}

@keyframes bump-tape-from-list {
  0% {
    opacity: 1;
    transform: translate(0, 5rem) scale(0.5) rotate(-30deg);
  }
  100% {
    opacity: 0;
    transform: translate(0, 0) scale(0.5) rotate(-30deg);
  }
}
</style>