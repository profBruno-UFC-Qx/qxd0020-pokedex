<script setup lang="ts">

import { computed, ref } from 'vue';
import { useStore } from 'vuex'
import PokemonCard from '../components/PokemonCard.vue'

const store = useStore();

//const pokemons = computed(() => store.getters.getFilteredPokemon)

const search = ref('')

</script>

<template>
    <h2>Pokedex</h2>
    <input class="form-control form-control-sm" type="text" placeholder="Procure um pokemon" aria-label=".form-control-sm example" v-model="search">
    <br>
    <div class="row">
        <PokemonCard v-for="pokemon in store.getters.getFilteredPokemon(search)"
            :key="pokemon.id"
            :id="pokemon.id"
            :nome="pokemon.nome"
            :tipos="pokemon.tipos"
            :img="pokemon.img"> 
        </PokemonCard>
    </div>
</template>