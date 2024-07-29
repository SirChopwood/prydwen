<script setup>
defineProps(['title', 'subtitle', 'image', 'link'])
</script>

<template>
  <a :href="link" class="group hover:text-white rounded-lg border-2 border-neutral-600 hover:border-secondary w-full max-w-[500px] h-52 text-pretty relative transition-all duration-400 ease-in-out">
    <div class="bg-border rounded-lg bg-center bg-cover group-hover:blur-sm w-full h-full object-center z-10" :style="'background-image: url('+image+')'"></div>
    <div class="absolute p-4 top-0 w-full h-fit lg:h-full opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity bg-black rounded-lg bg-opacity-50">
      <div class="text-start text-2xl font-bold text-primary">{{title}}</div>
      <div class="pt-2 text-xl italic text-neutral-200 hidden lg:block">{{subtitle}}</div>
    </div>
    <slot />
  </a>
</template>

<script>
export default {
  name: "ProjectThumbnail"
}
</script>
