<template>
  <div class="flex flex-row">
    <span v-for="point in 9">
        <MemoryPoint :light="point <= props.process" :num="point"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import MemoryPoint from './MemoryPoint.vue'

const props = defineProps({
  process: Number
})
</script>