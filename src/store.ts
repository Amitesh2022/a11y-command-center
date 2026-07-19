import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export type Release = { id: number; name: string; owner: string; progress: number; risk: 'low' | 'medium' }

export const useDeliveryStore = defineStore('delivery', () => {
  const releases = ref<Release[]>([
    { id: 1, name: 'Edge personalization', owner: 'Growth', progress: 86, risk: 'low' },
    { id: 2, name: 'Billing migration', owner: 'Core', progress: 61, risk: 'medium' },
    { id: 3, name: 'Mobile checkout', owner: 'Commerce', progress: 73, risk: 'low' },
  ])
  const completion = computed(() => Math.round(releases.value.reduce((sum, item) => sum + item.progress, 0) / releases.value.length))
  function advance(id: number) { const item = releases.value.find((release) => release.id === id); if (item) item.progress = Math.min(100, item.progress + 5) }
  function addRelease() { releases.value.push({ id: Date.now(), name: 'New initiative', owner: 'Platform', progress: 10, risk: 'low' }) }
  return { releases, completion, advance, addRelease }
})
