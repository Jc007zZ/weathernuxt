import { defineStore } from 'pinia'

// Podemos nomear o valor de retorno da `defineStore()` como quisermos,
// mas é melhor usar o nome da memória e envolvê-lo com `use`
// e `Store` (exemplo, `useUserStore`, `useCartStore`, `useProductStore`)
// o primeiro argumento é um identificador único da memória
// por toda a nossa aplicação
export const useLatLong = defineStore('lat', {
  state: () => ({lat:0 , long:0})
})