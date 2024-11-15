<script setup>
defineProps(['songname', "requester", "songid", "thumbnail"])
</script>

<template>
  <div class="h-fit absolute text-sm relative sour-gummy w-96 scale-[0.5]">
    <img ref="base" src="/images/rrm/overlay/tapes/TapeBase.png" class="static">
    <div class="absolute h-[22%] right-[5%] w-[16%] top-[32%]">
      <img :src="thumbnail" class="object-cover h-full w-full">
    </div>
    <img ref="label" class="absolute top-0">
<!--    <div class="absolute text-left w-[89%] left-[5%] top-[14%] text-2xl text-black leading-[0.9]">{{ songname }}</div>-->
    <div class="absolute text-left w-[89%] left-[5%] top-[16%] h-8 text-4xl text-black leading-[0.9] text-clip overflow-hidden">{{ songname }}</div>
    <div class="absolute text-left w-[60%] left-[5%] bottom-[34%] text-2xl text-black font-bold text-clip overflow-hidden">{{ requester }}</div>
    <div class="absolute text-left w-[20%] right-[6%] bottom-[34%] text-right text-2xl text-black font-bold text-clip overflow-hidden">{{ songid }}</div>
  </div>
</template>

<script>
export default {
  name: "OverlayTape",
  mounted() {
    this.$refs.label.src = `/images/rrm/overlay/tapes/Label${Math.ceil(Math.random()*4)}.png`
    this.$refs.base.style.filter = `hue-rotate(${Math.random()*360}deg)`
  }
}
</script>

<style scoped>
</style>