<script setup lang="ts">
import BackendStatus from './components/BackendStatus.vue'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
import { useDeliveryStore } from './store'

const store = useDeliveryStore()
const { completion, releases } = storeToRefs(store)
</script>

<template>
  <div class="shell">
    <aside>
      <div class="brand">A11y<span>delivery</span></div>
      <nav><RouterLink to="/">Control room</RouterLink><RouterLink to="/insights">Insights</RouterLink></nav>
      <div class="health"><i /> Platform operational</div>
    </aside>
    <main>
      <header><div><span class="eyebrow">Vue systems lab</span><h1>Accessibility command center</h1></div><button @click="store.addRelease">Plan release</button></header>
      <section class="summary"><article><small>Portfolio progress</small><strong>{{ completion }}%</strong><div class="bar"><span :style="{ width: `${completion}%` }" /></div></article><article><small>Active releases</small><strong>{{ releases.length }}</strong><p>Pinia reactive store</p></article><article><small>Accessibility confidence</small><strong>94%</strong><p>Computed from signals</p></article></section>
      <RouterView />
    </main>
  </div>
<BackendStatus /></template>
