<script setup>
defineProps(['title', 'subtitle', 'image', 'link', 'linktext'])
</script>

<template>
  <div class="relative mb-20">
    <div class="text-left text-4xl font-bold text-primary border-b-2 border-primary w-fit pr-2">{{title}}</div>
    <div class="text-left pl-4 text-2xl italic text-neutral-200">{{subtitle}}</div>
    <div class="absolute w-full h-fit flex gap-2 top-0 flex-row justify-end"><slot /></div>
  </div>
</template>

<script>
export default {
  name: "ProjectTitle"
}
</script>