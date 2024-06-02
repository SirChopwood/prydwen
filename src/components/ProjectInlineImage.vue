<script setup>
defineProps(['image'])
</script>

<template>
  <img :src=image class="w-40 h-auto m-2 rounded-md border-2 border-secondary float-right inline-block object-cover">
</template>

<script>
export default {
  name: "ProjectInlineImage"
}
</script>