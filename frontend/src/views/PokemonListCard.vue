<script setup lang="ts">

import { useStore } from 'vuex'
import PokemonCard from '../components/PokemonCard.vue'

const store = useStore();

</script>

<template>
    <h2>Pokedex</h2>
    <div class="row">
        <PokemonCard v-for="pokemon in store.state.pokemons"
            :key="pokemon.id"
            :id="pokemon.id"
            :nome="pokemon.nome"
            :tipos="pokemon.tipos"
            :img="pokemon.img"> 
        </PokemonCard>
    </div>
</template>