<script setup lang="ts">
import { ref } from "@vue/reactivity"
import { useStore } from 'vuex'
import { onMounted } from 'vue'

import PokemonCard from './components/PokemonCard.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('getPokemons')
})

</script>

<template>
  <div>
    <h2>Pokedex</h2>
    <div class="row">
        <PokemonCard v-for="pokemon in store.state.pokemons" 
          :key="pokemon.id"
          :id="pokemon.id"
          :nome="pokemon.nome"
          :tipos="pokemon.tipos"> 
        </PokemonCard>   
    </div>
  </div>
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
