<script setup lang="ts">

import { computed, ref } from 'vue';
import { pokemonStore } from '../stores/pokemon'
import PokemonCard from '../components/PokemonCard.vue'

const store = pokemonStore();

//const pokemons = computed(() => store.getFilteredPokemon)

const search = ref('')

</script>

<template>
    <h2>Pokedex</h2>
    <input class="form-control form-control-sm" type="text" placeholder="Procure um pokemon" aria-label=".form-control-sm example" v-model="search">
    <br>
    <div class="row">
        <PokemonCard v-for="pokemon in store.filteredPokemon(search)"
            :key="pokemon.id"
            :id="pokemon.id"
            :nome="pokemon.nome"
            :tipos="pokemon.tipos"
            :img="pokemon.img"> 
        </PokemonCard>
    </div>
</template>