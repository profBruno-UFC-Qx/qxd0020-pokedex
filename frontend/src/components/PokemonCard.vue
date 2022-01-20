<script setup lang="ts">

import PokemonType from './PokemonTypeBadge.vue';

const props = defineProps<{
    id: number,
    nome: string,
    tipos: string[],
    img: URL
}>()


</script>


<template>
    <div class="col-3  mb-4"> 
        <div class="card">
            <img :src="img" class="card-img-top img-fluid rounded-start" :alt="nome">
            <div class="card-body">
                <h5 class="card-title">{{nome}}</h5>
                <PokemonType v-for="(tipo, i) in tipos" :key="i" class="badge bg-secondary">{{tipo}}</PokemonType>
                <br>
                <router-link :to="{ name: 'details', params: { id: id}}"  class="btn btn-danger mt-1">Mais detalhes</router-link>
            </div>
        </div>
    </div>   
</template>