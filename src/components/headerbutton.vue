<script setup>
defineProps(['text', 'link'])
</script>

<template>
  <a :href="link"><div class="text-primary text-xl hover:text-white">{{ text }}</div></a>
</template>

<script>
export default {
  name: "headerbutton"
}
</script>