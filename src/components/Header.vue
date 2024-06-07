<template>
  <div class="fixed w-full h-14 top-0 bg-neutral-800 text-primary border-b-4 border-secondary text-xl drop-shadow-lg">
    <div class="absolute top-0 flex items-center justify-center w-full h-full gap-8">
      <Headerbutton text="Portfolio" link="#/" />
      <Headerbutton text="About Me" link="#/about" />
    </div>
    <div class="absolute top-0 flex items-center h-full w-fit">
      <a href="/"><div class="pl-4 text-2xl font-bold">Louis Mayes</div></a>
      <div class="pl-4 italic text-neutral-400">Technical Artist</div>
    </div>
  </div>
</template>

<script>
import Headerbutton from "@/components/HeaderButton.vue";
export default {
  components: {Headerbutton}
}
</script>