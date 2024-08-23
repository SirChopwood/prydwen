<script setup>
defineProps(['text', 'link'])
</script>

<template>
  <a :href="link" class="text-primary fill-primary text-xl hover:text-white hover:fill-white">
    <div >{{ text }}</div>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "headerbutton"
}
</script>