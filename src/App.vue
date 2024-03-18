<template>
  <section class="background fixed">
    <div class="flex flex-row">
      <div class="px-10 py-10">
        <Guider/>
      </div>
      <div class="px-10 py-10 w-full h-full">
        <router-view></router-view>
      </div>
    </div>
    
  </section>
  
</template>

<script setup lang="ts">
import { provide } from 'vue'
import Guider from './components/Guider/Guider.vue'

provide("theme", "light")
</script>

<style scoped>
section {
  width: 100%;
  height: 100%;
  background-image: url('/background/fold-d.jpg');
}
</style>
