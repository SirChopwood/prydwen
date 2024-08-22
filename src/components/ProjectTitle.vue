<script setup>
defineProps(['title', 'subtitle', 'image', 'link', 'linktext'])
</script>

<template>
  <div class="relative mx-8 mb-20">
    <div class="w-full h-fit flex gap-4 top-10 md:top-0 flex-row justify-start content-center items-center flex-wrap">
      <div class="bg-black bg-opacity-50 py-2 px-4 border-2 border-secondary rounded-lg">
        <div class="text-left text-4xl font-bold text-primary border-b-2 border-primary w-fit pr-2">{{title}}</div>
        <div class="text-left pl-4 w-fit text-2xl italic text-neutral-200">{{subtitle}}</div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectTitle"
}
</script>