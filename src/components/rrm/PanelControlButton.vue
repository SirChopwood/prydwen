<script setup>
defineProps(['text', "buttonid", "icon"])
</script>

<template>
  <button :id="buttonid" class="border-2 -:border-neutral-700 bg-opacity-0 -:bg-neutral-600 hover:bg-opacity-100 disabled:bg-opacity-100 -:disabled:bg-neutraal-900 -:text-neutral-400 hover:text-white py-1 px-2 mx-1 my-2 rounded-lg transition-all duration-75">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "PanelControlButton"
}
</script>
