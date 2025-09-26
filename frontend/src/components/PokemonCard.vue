<script setup lang="ts">

import PokemonType from '@/components/PokemonTypeBadge.vue';
import { useColor } from '@/composables/useTypeColor';

const props = defineProps<{
    id: number,
    nome: string,
    tipos: string[],
    img: string
}>()

const  [cor1, cor2]  =  useColor(props.tipos)

</script>


<template>
    <div class="col-3 mb-4"> 
        <router-link :to="`/pokemons/${id}`" class="text-decoration-none text-reset">
            <div class="card pokemon-card">
                <div>
                    <img :src="img" class="card-img-top img-fluid rounded-start" :alt="nome">
                    <p class="text-center">
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
    text-transform: capitalize;
    text-align: center;
}

</style>