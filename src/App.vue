<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="mt-16 mx-2 mb-2">
    <RouterView />
  </div>
  <Header />
</template>
