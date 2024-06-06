<script setup>
defineProps(['title'])
</script>

<template>
  <div class="mx-[10%] bg-neutral-800 px-4 py-2 mb-12 border-2 h-fit border-secondary rounded-md text-left">
    <div class="text-2xl font-bold text-primary ">{{title}}</div>
    <slot />
    <div class="flex flex-row w-full">
      <div class="basis-3/4">
        <slot name="BodyColumn"/>
      </div>
      <div class="basis-1/4 flex flex-col">
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