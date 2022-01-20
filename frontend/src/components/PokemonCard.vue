<script setup lang="ts">

import PokemonType from './PokemonTypeBadge.vue';

const props = defineProps<{
    id: number,
    nome: string,
    tipos: string[],
}>()

const linkToPokemonImg = (id): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

const linkToPokemon = (id): string => {
  return `/pokemons/${id}`;
}
</script>


<template>
    <div class="col-3  mb-4"> 
        <div class="card">
            <img :src="linkToPokemonImg(id)" class="card-img-top img-fluid rounded-start" :alt="nome">
            <div class="card-body">
                <h5 class="card-title">{{nome}}</h5>
                <PokemonType v-for="(tipo, i) in tipos" :key="i" class="badge bg-secondary">{{tipo}}</PokemonType>
                <br>
                <a :href="linkToPokemon(id)" class="btn btn-danger mt-1">Mais detalhes</a>
            </div>
        </div>
    </div>   
</template>