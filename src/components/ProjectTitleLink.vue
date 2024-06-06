<script setup>
defineProps(['link', 'linktext'])
</script>

<template>
    <a :href="link" class="py-1 px-4 rounded-full border-neutral-200 border-2 text-neutral-200 hover:text-black hover:bg-neutral-200 hover:border-neutral-400 bg-black bg-opacity-50"><div class="text-2xl italic">{{linktext}}</div></a>
</template>

<script>
export default {
  name: "ProjectTitleLink"
}
</script>