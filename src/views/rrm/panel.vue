<script setup lang=ts>
import { useHead } from '@unhead/vue'
import PanelControlCategory from "@/components/rrm/PanelControlCategory.vue";
import PanelControlButton from "@/components/rrm/PanelControlButton.vue";
import PanelToolbarButton from "@/components/rrm/PanelToolbarButton.vue";
import PanelRequestQueueEntry from "@/components/rrm/PanelRequestQueueEntry.vue";

useHead({
  title: 'RRM Panel',
  // @ts-ignore
  script: [
    {src: "https://code.jquery.com/jquery-3.6.0.js", async: true, defer: true, onload: () => {
        // @ts-ignore
        setupTwitchAccount()
      }
    },
    {src: "https://code.jquery.com/ui/1.13.2/jquery-ui.js", async: true, defer: true, onload: () => {
        // @ts-ignore
        setupRequestQueue()
      }
    },
    {src: "https://player.twitch.tv/js/embed/v1.js", async: true, defer: true, onload: () => {
        // @ts-ignore()
        twitchReady = true
      }
    }
  ]
})
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full -z-100 bg-neutral-900"></div>
  <div class="relative w-full flex justify-center text-base">
    <div class="w-full flex flex-col gap-4">
      <div class="w-full h-fit bg-neutral-800 mt-0 drop-shadow-xl rounded-b-lg flex flex-row divide-x divide-neutral-700 [&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg">
        <PanelToolbarButton buttonid="ToolbarTitle" text="Rami Request Manager" class="text-primary font-bold" disabled/>
        <div class="">
          <img id="ToolbarUserImage" class="h-12 inline" src="/images/logo.png">
          <select class="min-w-40 max-w-80 bg-neutral-800 px-2 text-secondary text-lg" name="Channels" id="ToolbarUserChannels">
            <option class="text-neutral-400" value="none">No Stream Selected</option>
            <option class="text-neutral-400" value="totless">Totless</option>
          </select>
        </div>
        <!--TOOLBAR CONTROLS-->
        <PanelToolbarButton buttonid="ToolbarSetup" class="hover:bg-red-900 hover:text-red-300 bg-red-950 text-red-400" text="Setup Panel"></PanelToolbarButton>
        <PanelToolbarButton buttonid="ToolbarHost" text="Host: The DJ Fry"/>
        <PanelToolbarButton buttonid="ToolbarUptime" text="Uptime: 00:00:00" disabled/>
        <PanelToolbarButton buttonid="ToolbarOpenOverlay" text="Open Overlay"/>
        <PanelToolbarButton buttonid="ToolbarRefresh" text="Refresh"/>
        <!--MID BAR GAP-->
        <div class="grow"/>
        <!--RIGHT SIDE CONTROLS-->
        <PanelToolbarButton buttonid="ToolbarHelp" text="Help"><div class="absolute size-4 rounded-full top-0 left-0 animate-ping bg-amber-700"/></PanelToolbarButton>
        <PanelToolbarButton buttonid="ToolbarPing" text="Ping: " disabled>
          <template #AfterText>
            <span class="text-red-400">000</span>
          </template>
        </PanelToolbarButton>
      </div>
      <div class="w-full flex flex-row gap-4">
        <div class="basis-3/5 h-full bg-neutral-800 drop-shadow-xl rounded-lg p-4">
          <div id="EmbeddedTwitchPlayer"/>
        </div>
        <div class="basis-2/5 grow bg-black bg-neutral-800 drop-shadow-xl rounded-lg p-4 flex flex-col gap-4 overflow-y-scroll">
          <!--SESSION CONTROLS-->
          <PanelControlCategory title="Session Controls" subtitle="This is how you set if people can make requests.">
            <ul class="list-disc pl-6">
              <li>You can only have one session open at a time for a given twitch channel.</li>
              <li>If you wish to pause requests, Lock the queue and reopen it when you're ready.</li>
              <li>Closing the session will end the session and allow that channel to open or be added to another.</li>
            </ul>
            <PanelControlButton buttonid="SessionQueueOpen" class="border-green-800 bg-green-600 disabled:bg-green-900 text-green-400" text="Open / Unlock"></PanelControlButton>
            <PanelControlButton buttonid="SessionQueueLock" class="border-yellow-800 bg-yellow-600 disabled:bg-yellow-900 text-yellow-400" text="Lock"></PanelControlButton>
            <PanelControlButton buttonid="SessionQueueClose" class="border-red-800 bg-red-600 disabled:bg-red-900 text-red-400" text="Close"></PanelControlButton>
          </PanelControlCategory>

          <!--OVERLAY CONTROLS-->
          <PanelControlCategory title="Overlay Controls" subtitle="Control how the Queue is displayed on the Overlay.">
            <textarea id="NotificationMessageText" class="w-full rounded-lg bg-neutral-900 p-2 border-2 border-opacity-0 focus:border-opacity-100 border-neutral-700 !outline-none" placeholder="This is the message that will display when the queue is paused."></textarea>
            <PanelControlButton buttonid="OverlayMessagePause" class="border-blue-800 bg-blue-600 disabled:bg-blue-900 text-blue-400" text="Welcome"></PanelControlButton>
            <PanelControlButton buttonid="OverlayMessagePause" class="border-blue-800 bg-blue-600 disabled:bg-blue-900 text-blue-400" text="Pause"></PanelControlButton>
            <PanelControlButton buttonid="OverlayMessageCustom" class="border-yellow-800 bg-yellow-600 disabled:bg-yellow-900 text-yellow-400" text="Custom Message"></PanelControlButton>
            <PanelControlButton buttonid="OverlayMessageRemove" class="border-red-800 bg-red-600 disabled:bg-red-900 text-red-400" text="Remove Message"></PanelControlButton>
          </PanelControlCategory>

          <!--REQUEST QUEUE-->
          <PanelControlCategory title="Request Queue" subtitle="You can view and rearrange the queue below.">
            <PanelControlButton buttonid="OverlayMessagePause" class="border-blue-800 bg-blue-600 disabled:bg-blue-900 text-blue-400" text="Previous"></PanelControlButton>
            <PanelControlButton buttonid="OverlayMessagePause" class="border-blue-800 bg-blue-600 disabled:bg-blue-900 text-blue-400" text="Next"></PanelControlButton>
            <PanelControlButton buttonid="OverlayMessageRemove" class="border-red-800 bg-red-600 disabled:bg-red-900 text-red-400" text="Clear"></PanelControlButton>
            <div id="RequestQueue" class="h-40 resize-y overflow-y-scroll overflow-x-clip text-pretty min-h-20 w-full rounded-lg bg-neutral-900 flex flex-col">
              <PanelRequestQueueEntry name="Beep Beep I'm A Sheep" songID="2232" user="MrMimi"/>
              <PanelRequestQueueEntry name="Starships - Nicki Minaj" songID="427" user="MrMimi"/>
              <PanelRequestQueueEntry name="I WANT IT THAT WAY (Remix) by Backstreet Boys" songID="871" user="DJ_Fry"/>
              <PanelRequestQueueEntry name="READY OR NOT by: Momoland" songID="1778" user="ramiris_"/>
              <PanelRequestQueueEntry name="Wake Me Up" songID="2747" user="ASneakyNinja"/>
              <PanelRequestQueueEntry name="[KPOP] ASTRO - After Midnight" songID="1234" user="ASneakyNinja"/>
              <PanelRequestQueueEntry name="Can you like... do the thing pls" user="MrMimi"/>
              <PanelRequestQueueEntry name="Ooh hai mr streamur!" user="MrMimi"/>
            </div>
          </PanelControlCategory>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  let twitchReady = false

  export default {
    name: "rrm_panel",
    mounted() {
    }
  }

  function setupRequestQueue() {
    $("#SongQueue").sortable({
      placeholder: "PanelQueueBoxPlaceholder",
      helper: 'clone',
      revert: true,
      cursor: "move",
      opacity: 1,
      axis: "y",
      cancel: "span,input,textarea,button,select,option",
      handle: ".SongQueueEntryHandle",
      forcePlaceholderSize: true
    })
  }

  function setupTwitchAccount() {
    let authProperties: Record<string, string> = {} // Access Token = authProperties["access_token"]
    try { // ENSURE USER IS LOGGED IN VIA TWITCH
      let properties = String(window.location.hash).replace("#","").split("&")
      for (let property of properties) {
        let newProperty = property.split("=")
        authProperties[newProperty[0]] = newProperty[1]
      }
      if (authProperties["access_token"]) {
        sessionStorage.setItem("access_token", authProperties["access_token"])
      } else {
        window.location.replace("http://localhost:5173/rrm/")
      }
    } catch (e) {
      window.location.replace("http://localhost:5173/rrm/")
    }
    $.ajaxSetup({
      headers: {
        "Authorization": `Bearer ${authProperties["access_token"]}`,
        "Client-Id": "987qwjbkxwv2y140zukpj8hzozd2yg"
      }
    })
    $.get("https://api.twitch.tv/helix/users", function (data) {
      console.log(data.data)
      if (data.data[0]) {
        sessionStorage.setItem("user_id", data.data[0].id)
        sessionStorage.setItem("user_login", data.data[0].login)
        sessionStorage.setItem("user_display_name", data.data[0].display_name)
        sessionStorage.setItem("user_profile_image_url", data.data[0].profile_image_url)
        let userImage = $("#ToolbarUserImage")[0]
        console.log(userImage)
        userImage.src = data.data[0].profile_image_url
        console.log("Logged in to Twitch")

        $.get(`https://api.twitch.tv/helix/channels/followed?user_id=${data.data[0].id}`, function (data2) {
        //$.get(`https://api.twitch.tv/helix/moderation/channels?user_id=${data.data[0].id}`, function (data2) {
          let moddedChannels = data2.data
          let moddedChannelsDropdown = $("#ToolbarUserChannels")
          for (let moddedChannel of moddedChannels) {
            let newOption = $(`<option class="text-neutral-400" value="${moddedChannel.broadcaster_login}">${moddedChannel.broadcaster_name}</option>`)
            moddedChannelsDropdown.append(newOption)
          }
          moddedChannelsDropdown.on('change', function() {
            if (this.value === "none") {
              $("#EmbeddedTwitchPlayer").empty();
            } else {
              loadTwitchPlayer(this.value)
            }
          })
        })
      } else {console.log("Failed to login to Twitch")}
    })
  }

  let TwitchPlayer: any
  function loadTwitchPlayer(channel: string) {
    $("#EmbeddedTwitchPlayer").empty();
    let TwitchOptions = {
      width: "100%",
      height: window.screen.height*0.6,
      channel: channel,
      autoplay: true,
      muted: true,
      parent: ["louismayes.xyz", "localhost"]
    };
    // @ts-ignore
    TwitchPlayer = new Twitch.Player("EmbeddedTwitchPlayer", TwitchOptions);
  }
</script>