<script setup lang=ts>
import {useHead} from "@unhead/vue";
useHead({
  title: 'RRM Authentication'
})
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full -z-100 bg-neutral-900"></div>
  <div class="relative w-full mt-8 flex flex-col justify-center text-base">
    <div class="text-primary text-2xl">You should be redirected to Twitch to login soon...</div>
    <div>If this doesnt work, click <a id="RedirectButton" class="text-secondary underline">here</a>.</div>
  </div>
</template>

<script lang=ts>
export default {
  name: "rmm_auth",
  mounted() {
    const newUri = encodeURI("https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=987qwjbkxwv2y140zukpj8hzozd2yg&redirect_uri=https://louismayes.xyz/rrm/panel&scope=user:read:moderated_channels user:read:follows")
    //const newUri = encodeURI("https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=987qwjbkxwv2y140zukpj8hzozd2yg&redirect_uri=http://localhost:5173/rrm/panel&scope=user:read:moderated_channels user:read:follows")
    let RedirectButton = document.getElementById("RedirectButton")
    RedirectButton.setAttribute("href", newUri)
    setTimeout(() => {window.location.replace(newUri)}, 1500)
  }
}
</script>