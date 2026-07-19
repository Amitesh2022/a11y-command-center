import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useDeliveryStore } from './store'

describe('delivery store', () => {
  beforeEach(() => setActivePinia(createPinia()))
  it('advances a release without exceeding 100', () => {
    const store = useDeliveryStore()
    store.advance(1)
    expect(store.releases[0].progress).toBe(91)
    expect(store.completion).toBeGreaterThan(0)
  })
})
