<script setup lang="ts">
import type { SingleDayForecast } from '~/types/weather';
import WeatherIcon from './weatherIcon.vue'

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

defineProps<{
  data: SingleDayForecast
}>()
</script>

<template>
  <div class=" shadow-lg w-full h-full px-8 py-4 rounded-lg bg-white flex flex-col items-center justify-center gap-4">
    <div class="flex flex-col items-center gap-1 text-sm sm:text-base lg:text-lg">
      <span class="uppercase text-slate-500 tracking-wider font-bold">{{ DAYS_OF_WEEK[new
        Date(data.time).getDay()] }}</span>
      <div class="font-bold tracking-wider text-slate-600">
        <span>{{ new Date(data.time).getDate() }}</span>
        <span>/</span>
        <span>{{ new Date(data.time).getMonth() + 1 }}</span>
      </div>
    </div>
    <div class="w-full flex gap-2 justify-around py-4">
      <WeatherIcon :weather-code="data.weather_code" className="w-10 h-10 lg:w-12 lg:h-12" />
      <div class="flex gap-1 items-end tracking-wider">
        <div class="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          {{ data.temperature_2m_max?.toFixed(0) }}°
        </div>
        <div class="text-slate-600 text-base md:text-lg">
          {{ data.temperature_2m_min?.toFixed(0) }}°
        </div>
      </div>
    </div>
  </div>
</template>
