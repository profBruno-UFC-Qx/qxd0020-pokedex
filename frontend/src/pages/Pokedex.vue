<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
import type { Pokemon } from '@/types'
import { getAll } from '@/services/pokemonService'

const pokemons = ref<Pokemon[]>([])
const loading = ref(true)

onMounted( async() => {
  try {
    const res = await getAll()
    pokemons.value = res.data
  } catch (e) {
    window.alert(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <h2>Pokedex</h2>
    <input class="form-control form-control-sm" type="text" placeholder="Procure um pokemon" aria-label=".form-control-sm example" v-model="search">
    <br>
    <div class="row" v-if="!loading">
     <PokemonCard v-for="pokemon in pokemons"
        :key="pokemon.id"
        :id="pokemon.id"
        :nome="pokemon.nome"
        :tipos="pokemon.tipos"
        :img="pokemon.img"> 
      </PokemonCard>
    </div>
    <div v-else class="spinner-border text-center" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
</template>