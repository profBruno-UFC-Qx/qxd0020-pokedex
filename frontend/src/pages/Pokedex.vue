<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
import type { Pokemon } from '@/types'
import { getAll } from '@/services/pokemonService'

const pokemons = ref<Pokemon[]>([])

onMounted( async() => {
  const res = await getAll()
  pokemons.value = res.data
})
</script>

<template>
  <h2>Pokedex</h2>
    <input class="form-control form-control-sm" type="text" placeholder="Procure um pokemon" aria-label=".form-control-sm example" v-model="search">
    <br>
    <div class="row">
     <PokemonCard v-for="pokemon in pokemons"
        :key="pokemon.id"
        :id="pokemon.id"
        :nome="pokemon.nome"
        :tipos="pokemon.tipos"
        :img="pokemon.img"> 
      </PokemonCard>
    </div>
</template>