<script setup lang=ts>
import {useHead} from '@unhead/vue'

useHead({
  title: 'Santa Tot Letters',
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
  <div class="fixed w-[1920px] h-[1080px] top-0 left-0 charm-bold text-lg text-orange-900 text-left">
    <div class="absolute w-[30%] h-fit -bottom-10 -left-4">
      <img src="/images/totless/requestlist.png" class="">
      <div id="MessageBox" class="absolute left-[7%] top-[17%] w-[57%] h-[60%] -skew-y-3 skew-x-2">
        <div class="text-2xl">Dear Santa Tot</div>
        <div class="pl-2">
          <div id="MessageText" class="charm-regular">
          </div>
          <br>
          For Christmas I would like:
          <div id="WishesText" class="charm-regular">

          </div>
        </div>
        <br>
        <div class="text-2xl">From <div id="UserText" class="charm-regular inline"></div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "santaletters"
}
let MessageBox
let MessageText
let WishesText
let UserText

function setup() {
  $.ajaxSetup({
    headers: {"Content-type": "application/json"}
  })
  MessageBox = $("#MessageBox")
  MessageText = $("#MessageText")
  WishesText = $("#WishesText")
  UserText = $("#UserText")
  setInterval(refreshData, 5000)
}

function refreshData() {
  $.post(`https://api.louismayes.xyz/totless/getmessage`, async function (data, status, xhr) {
    if (xhr.status == 200) {
      MessageBox.css({"opacity": 1})
      MessageText.text(data.Message)
      WishesText.text(data.Wishes)
      UserText.text(data.User)
    } else if (xhr.status == 204) {
      MessageBox.css({"opacity": 0})
      MessageText.text("")
      WishesText.text("")
      UserText.text("")
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