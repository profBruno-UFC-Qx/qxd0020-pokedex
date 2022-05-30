<script setup lang="ts">
import { ref } from "@vue/reactivity"
import { onMounted } from 'vue'
import { pokemonStore } from './stores/pokemon'

const store = pokemonStore()

onMounted(() => {
  store.getPokemons()
})

</script>

<template>
    <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
