<script setup>
defineProps(['title', 'date'])
</script>

<template>
  <div class="relative mx-[10%] bg-neutral-800 px-4 py-2 mb-4 border-2 h-fit border-secondary rounded-md text-left">
    <div class="flex flex-row content-center">
      <div class="grow text-2xl md:text-3xl font-bold text-primary ">{{title}}</div>
      <div class="italic text-neutral-400 justify-self-end">{{date}}</div>
    </div>
    <slot />
    <div class="flex flex-col w-full gap-4">
      <div class="basis-auto">
        <slot name="BodyColumn"/>
      </div>
      <div class="basis-auto flex flex-col md:flex-row place-items-center">
        <slot name="ImageColumn"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectParagraph"
}
</script>