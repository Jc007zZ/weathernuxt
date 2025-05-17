<script setup lang="ts">
import { MapPin } from 'lucide-vue-next';
</script>

<template>
  <div id='backdrop' class="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 z-40 flex items-center justify-center">
    <div class="z-50 flex flex-col items-center justify-around w-60 h-60 p-8 bg-white rounded-xl">
      <MapPin class="text-slate-500 w-16 h-16 animate-pulse" />
      <p class="text-slate-500 font-bold">Getting your location</p>
    </div>
  </div>
</template>
