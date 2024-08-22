<template>
  <div class="fixed w-full h-fit py-1 md:py-2 top-0 bg-neutral-800 text-primary border-b-4 border-secondary text-xl drop-shadow-lg">
    <div class="inline-flex items-center h-full w-fit md:ml-4 md:float-start">
      <a href="/#/"><div class="text-2xl font-bold">Louis Mayes</div></a>
      <div class="pl-4 italic text-neutral-400">Technical Artist</div>
    </div>
    <div class="inline-flex items-center md:mr-4 md:float-end w-fit h-full gap-8">
      <Headerbutton text="Portfolio" link="/#/" />
      <Headerbutton text="About Me" link="/#/about" />
      <Headerbutton text="My CV" link="/documents/CV2.pdf" />
    </div>
  </div>
  <div class="fixed w-full h-32 top-0 flex justify-center pointer-events-none">
    <img src="/images/logo.png" class="hidden md:block h-24 w-auto md:ml-4">
  </div>
</template>

<script>
import Headerbutton from "@/components/HeaderButton.vue";
export default {
  components: {Headerbutton}
}
</script>