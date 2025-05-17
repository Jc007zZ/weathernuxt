<script setup lang="ts">
import type { DailyForecast } from '~/types/weather';
import { arrayTransformDailyForecastData } from '~/utils/utils';

defineProps<{
  data: DailyForecast,
}>()
</script>

<template>
  <div class="w-full flex flex-col gap-4 lg:gap-8 items-center">
    <h3 class="font-bold text-xl md:text-2xl text-slate-700">7-Days forecast</h3>
    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      <WeatherCard v-for="day in arrayTransformDailyForecastData(data)" :data="day" />
    </div>
  </div>
</template>
