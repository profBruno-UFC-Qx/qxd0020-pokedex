<script setup lang="ts">

import PokemonType from './PokemonTypeBadge.vue';

const props = defineProps<{
    id: number,
    nome: string,
    tipos: string[],
    img: URL
}>()

function getColor(type) {
    return {
        grass: "#78C850",
        poison: "#A040A0",
        fire: "#F08030",
        flying: "#A890F0",
        water: "#6890F0",
        bug: "#A8B820",
        normal: "#A8A878",
        electric: "#F8D030",
        ground: "#E0C068",
        fairy: "#EE99AC",
        fighting: "#C03028",
        psychic: "#A890F0",
        rock: "#B8A038",
        steel: "#B8B8D0",
        ice: "#98D8D8",
        ghost: "#705898",
        dragon: "#7038F8",
        dark: "#705848",

    }[type]
}

const  [tipo1, tipo2 ]  =  props.tipos

const color1 = getColor(tipo1)
const color2 = getColor(tipo2 ? tipo2 : tipo1)




</script>


<template>
    <div class="col-3 mb-4"> 
        <router-link :to="`/pokemons/${id}`" class="text-decoration-none text-reset">
            <div class="card pokemon-card">
                <div>
                    <img :src="img" class="card-img-top img-fluid rounded-start" :alt="nome">
                    <p>
                        <PokemonType v-for="(tipo, i) in tipos" :key="i" >{{tipo}}</PokemonType>
                    </p>
                    <h5 class="mb-0 pokemon-name" >{{nome}}</h5>
                </div>
            </div>
        </router-link>
    </div>   
</template>

<style scoped>

.pokemon-card {
    background-image: linear-gradient(90deg, v-bind(color1) 50%, v-bind(color2) 50%);
    box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);
}


.pokemon-name {
    background-color: rgba(0,0,0,.5);
     color: white;
}

</style>