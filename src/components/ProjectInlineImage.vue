<script setup>
defineProps(['image'])
</script>

<template>
  <a :href="image" class="m-2 rounded-md border-2 border-secondary float-right inline-block object-cover hover:border-primary transition duration-200">
    <img :src=image class="rounded-md">
  </a>
</template>

<script>
export default {
  name: "ProjectInlineImage"
}
</script>