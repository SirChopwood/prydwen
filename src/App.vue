<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'
</script>

<template>
  <div class="mt-16 z-100">
    <RouterView />
  </div>
  <Header />
</template>
