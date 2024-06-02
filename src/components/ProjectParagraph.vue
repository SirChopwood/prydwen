<script setup>
defineProps(['title'])
</script>

<template>
  <div class="mx-[15%] bg-neutral-800 px-4 py-2 border-2 h-fit border-secondary rounded-md">
    <div class="text-2xl font-bold text-primary text-left">{{title}}</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "ProjectParagraph"
}
</script>