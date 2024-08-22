<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div id="background" class="fixed w-full h-full top-0 left-0 bg-secondary bg-blend-screen">
    <div class="w-full h-full halftone"></div>
  </div>
  <div class="mt-16 mx-2 mb-2">
    <RouterView />
  </div>
  <Header />
</template>

<style>
.halftone {
  position: absolute;
  background: linear-gradient(to bottom, #777777, #ffffff), radial-gradient( 20px at 50% 50%, #fff, #000 ) top left / 30px 30px, #c940af;
  background-blend-mode: multiply;
  filter: brightness(1.3) blur(0px) contrast(30) saturate(0.7);
}
</style>