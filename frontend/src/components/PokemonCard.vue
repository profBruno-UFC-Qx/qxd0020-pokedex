<script setup lang="ts">

import PokemonType from './PokemonTypeBadge.vue';
import { getCorPorTipo } from '../mixin/pokemonCardMixin'

const props = defineProps<{
    id: number,
    nome: string,
    tipos: string[],
    img: URL
}>()

const  [cor1, cor2]  =  getCorPorTipo(props.tipos)

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
    background-image: linear-gradient(90deg, v-bind(cor1) 50%, v-bind(cor2) 50%);
    box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);
}


.pokemon-name {
    background-color: rgba(0,0,0,.5);
     color: white;
}

</style>