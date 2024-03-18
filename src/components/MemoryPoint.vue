<template>
  <div :class="{'bg-black': props.light, 'text-white': props.light}" class="text-xl w-8 h-8 text-center border">
    {{ props.num }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  light: Boolean,
  num: Number
})
</script>