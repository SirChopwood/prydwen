<script setup>
defineProps(['text', "buttonid", "icon"])
</script>

<template>
  <button :id="buttonid" class="relative px-4 min-h-10 -:enabled:hover:bg-neutral-700 -:enabled:hover:text-primary transition-all duration-75 -:bg-neutral-800 -:text-neutral-200 text-lg">
    <slot name="PreText"/>
    {{ text }}
    <slot name="AfterText"/>
  </button>
</template>

<script>
export default {
  name: "PanelToolbarButton"
}
</script>
