<script setup>
defineProps(['image'])
</script>

<template>
  <a :href="image" class="max-h-40 h-fit w-auto m-2 rounded-md border-2 border-neutral-400 float-right inline-block object-cover hover:border-primary transition duration-200">
    <img :src=image class="max-h-40 rounded-md">
  </a>
</template>

<script>
export default {
  name: "ProjectInlineImage"
}
</script>