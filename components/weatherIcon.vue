<script setup lang="ts">
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudRain,
  CloudSnow,
  CloudSun,
  Cloudy,
  Haze,
  Sun,
  Tornado
} from 'lucide-vue-next';

defineProps<{
  weatherCode: number,
  className: string
}>()

// These are needed because no switch in Svelte markup
const sunCodes = [0, 1, 2];
const cloudSunCodes = [3];
const tornadoCodes = [30, 31, 32, 33, 34, 35];
const hazeCodes = [5];
const cloudFogCodes = [6, 7, 8, 9, 10, 11, 12, 28, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
const cloudyCodes = [4, 13, 14, 15, 16, 17, 18, 19];
const cloudDrizzleCodes = [20, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 66, 68, 80, 83, 91];
const cloudRainCodes = [21, 24, 25, 29, 61, 62, 63, 64, 65, 67, 69, 81, 82, 84, 92, 95, 97];
const cloudSnowCodes = [
  22, 23, 26, 36, 37, 38, 39, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 85, 86, 87, 88, 93, 94
];
const cloudHailCodes = [27, 89, 90, 96, 99];
const cloudCodes = [98];
</script>

<template>
  <Sun v-if="sunCodes.includes(weatherCode)" :class="className" />
  <CloudSun v-else-if="cloudSunCodes.includes(weatherCode)" :class="className" />
  <Tornado v-else-if="tornadoCodes.includes(weatherCode)" :class="className" />
  <Haze v-else-if="hazeCodes.includes(weatherCode)" :class="className" />
  <CloudFog v-else-if="cloudFogCodes.includes(weatherCode)" :class="className" />
  <Cloudy v-else-if="cloudyCodes.includes(weatherCode)" :class="className" />
  <CloudDrizzle v-else-if="cloudDrizzleCodes.includes(weatherCode)" :class="className" />
  <CloudRain v-else-if="cloudRainCodes.includes(weatherCode)" :class="className" />
  <CloudSnow v-else-if="cloudSnowCodes.includes(weatherCode)" :class="className" />
  <CloudHail v-else-if="cloudHailCodes.includes(weatherCode)" :class="className" />
  <Cloud v-else-if="cloudCodes.includes(weatherCode)" :class="className" />
</template>
