<template>
  <div class="text-sm text-gray-900 h-full">
    <div class="px-10 py-10 h-full w-full bg-gray-100 rounded-3xl opacity-40">
      <div class="px-8 py-8 text-7xl flex flex-row items-baseline">Word<MemoryAxis :process="3" class="pl-4"/></div>
      <div class="flex-row">
        <div class="px-10 py-3 hover:bg-gray-200 rounded-3xl text-center text-3xl">还记得</div>
        <div class="px-10 py-3 hover:bg-gray-200 rounded-3xl text-center text-3xl">忘掉了</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MemoryAxis from '../components/MemoryAxis.vue'
</script>