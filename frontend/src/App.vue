<script setup lang="ts">
import { ref } from "@vue/reactivity"
import { useStore } from 'vuex'
import { onMounted } from 'vue'

const store = useStore()

onMounted(() => {
  store.dispatch('getPokemons')
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
