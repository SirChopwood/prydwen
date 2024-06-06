<script setup>
defineProps(['title', 'subtitle', 'image', 'link', 'linktext'])
</script>

<template>
  <div class="relative mb-20">
    <div class="absolute top-0 -left-8 w-8 h-full bg-black bg-opacity-50 -z-30 py-2"></div>
    <div class="w-fit h-full bg-black bg-opacity-50 -z-30 py-2 pr-8">
      <div class="text-left text-4xl font-bold text-primary border-b-2 border-primary w-fit pr-2">{{title}}</div>
      <div class="text-left pl-4 w-fit text-2xl italic text-neutral-200">{{subtitle}}</div>
    </div>
    <div class="absolute w-full h-fit flex gap-2 top-0 flex-row justify-end"><slot /></div>
  </div>
</template>

<script>
export default {
  name: "ProjectTitle"
}
</script>