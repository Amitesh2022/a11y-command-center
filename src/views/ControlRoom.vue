<script setup lang="ts">
import { useDeliveryStore } from '../store'
const store = useDeliveryStore()
</script>

<template><section class="panel"><div class="panel-title"><div><span class="eyebrow">Live accessibility estate</span><h2>Product audits</h2></div><span>Evidence updated now</span></div><div class="release header-row"><span>Experience</span><span>Owner</span><span>Coverage</span><span>Conformance risk</span><span /></div><div v-for="release in store.releases" :key="release.id" class="release"><b>{{ release.name }}</b><span>{{ release.owner }}</span><div class="mini-bar"><i :style="{ width: `${release.progress}%` }" /></div><span :class="['risk', release.risk]">{{ release.risk }}</span><button @click="store.advance(release.id)">+5%</button></div></section></template>
