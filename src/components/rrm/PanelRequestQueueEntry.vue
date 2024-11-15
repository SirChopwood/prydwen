<template>
  <div class="group w-full mb-1 flex flex-row has-[:hover]:bg-neutral-800 rounded-lg">
    <div class="SongQueueEntryHandle self-stretch w-6 mx-2 cursor-move *:fill-neutral-700 *:group-hover:fill-neutral-400 *:hover:!fill-primary flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-4">
        <path fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="flex grow flex-col py-1 mb-1">
      <div class="group-hover:text-primary text-neutral-200 text-lg">{{ name }}</div>
      <div class="group-hover:text-primary flex flex-row items-center">
        <button :name="songID" class="text-base p-1 rounded-md outline outline-1 outline-neutral-600 font-bold hover:outline-primary">{{ songID }}</button>
        <div class="pl-2 text-sm"> by {{ user }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PanelSongQueueEntry",
  props: ['name', "songID", "user"],
  mounted() {
    let button = document.getElementsByName(this.songID)
    if (button[0]) {
      button[0].addEventListener("click", e => {
        navigator.clipboard.writeText(this.songID)
      })
    }
  }
}

</script>