<script setup>
defineProps(['image'])
</script>

<template>
  <div class="fixed top-0 left-0 bg-center bg-cover w-full h-full object-center -z-100" :style="'background-image: url('+image+')'" />
</template>

<script>
export default {
  name: "ProjectBackground"
}
</script>