<template>
  <div class="px-5 py-3 hover:bg-gray-200 rounded-full w-full">
    {{ props.text }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  text: String
})
</script>