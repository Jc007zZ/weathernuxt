<script setup lang="ts">
import type { SearchResult } from '~/types/weather';
import { SearchIcon } from 'lucide-vue-next'
import { useLatLong } from '@/utils/latstate'
const emit = defineEmits(['locationChanged', 'startTransition'])

let searchValue = ref('');
let searchOptionsOpen = ref(false);
let timeout: NodeJS.Timeout;
let searchResults = ref<SearchResult[]>([]);

function searchBlurred(e: FocusEvent) {
  // If a list option is chosen, don't do anything as handleSelected will sort out click
  if (e.relatedTarget) return;
  searchOptionsOpen.value = false;
}

async function search() {
  const res = await fetch(
    // Make a request, with input value
    `https://geocoding-api.open-meteo.com/v1/search?name=${searchValue.value}&count=10&language=en&format=json`
  );
  const data = await res.json();
  searchResults.value = data.results as SearchResult[];
  console.log("searched")
}

// Watch if the input value changed
watch(searchValue, () => {
  if (!searchValue) {
    searchResults.value = [];
    return;
  }
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(search, 500);
})

let lagLong = useLatLong()

async function handleOptionSelected(option: SearchResult) {
  // Set the value of location in the state
  lagLong.lat = option.latitude
  lagLong.long = option.longitude

  emit('locationChanged', `${option.name}, ${option.country_code.toUpperCase()}`)

  // Reset search state
  searchOptionsOpen.value = false;
  searchResults.value = [];
  searchValue.value = '';
}

</script>
<template>
  <div class="w-full flex gap-4 lg:gap-8 items-center">
    <div class="w-full relative grow">
      <div class="flex relative w-full grow">
        <SearchIcon class="absolute top-[1.3rem] left-[1rem] text-slate-400 h-6 w-6" />
        <input placeholder="Search for a location" v-model="searchValue" @blur="searchBlurred"
          @focus="$event => searchOptionsOpen = true" class="pl-12 pr-2 py-5 bg-white grow rounded-xl text-lg" />
      </div>
      <ul v-if="searchResults && searchOptionsOpen" class="absolute w-full bg-white">
        <li v-for="option in searchResults" tabIndex={0} role="button" @click="handleOptionSelected(option)"
          class="px-2 py-4 border w-full grid grid-cols-[min-content_1fr] items-center text-slate-700 hover:text-black
                                                                                                                                    hover:bg-slate-200 cursor-pointer">
          <span class="tracking-wider font-bold text-lg uppercase mr-4 font-mono">{{ option.country_code }}</span>
          <span class="tracking-wider">
            {{ option.name }}
            {{ option.admin1 ? `, ${option.admin1}` : '' }}
          </span>
        </li>
      </ul>
    </div>


  </div>
</template>
