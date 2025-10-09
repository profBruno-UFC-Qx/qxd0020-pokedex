<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { onBeforeRouteUpdate, useRoute }  from 'vue-router'
import PokemonStatus from '../components/PokemonStatus.vue';
import PokemonType from '../components/PokemonTypeBadge.vue';
import type { Pokemon } from '@/types';
import { getById } from '@/services/pokemonService';
import { useColor } from '@/composables/useTypeColor';

const pokemon = ref<Pokemon>({} as Pokemon);
const route = useRoute()
const loading = ref(true)

onMounted(async () => {
    const res = await getById(Number(route.params.id))
    pokemon.value = res.data
    loading.value = false
})

const cor1 = computed(() =>  useColor(pokemon.value.tipos[0]))
const cor2 = computed(() =>  pokemon.value.tipos.length > 1 ? useColor(pokemon.value.tipos[1]) : cor1.value)

onBeforeRouteUpdate(async (to, from) => {
    if (to.params.id != from.params.id) {
        const res = await getById(Number(to.params.id))
        pokemon.value = res.data
    }
})

</script>

<template>
<router-link to="/">
    <button type="button" class="btn btn-outline-danger back-button">
        <i class="bi bi-arrow-left-circle"></i> Voltar
    </button>
</router-link> 
<div class="col" v-if="loading == false">
    <div class="card mt-3 mb-3">
        <div class="row g-0" :style="`background-color: ${cor1}`">
            <h5 class="card-title pokemon-name">{{pokemon.nome}}</h5>
        </div>
        <div class="row g-0 mb-2">
            <div class="col-md-4">
                <img :src="pokemon.img" class="card-img-top img-fluid rounded-start" alt="{{nome}}">
            </div>
            
            <div class="col-md-8">
                <div class="card-body text-start">
                    <h5 class="card-title">#{{pokemon.id}}
                        <small class="text-muted">
                            <PokemonType  :types="pokemon.tipos"/>
                        </small>
                    </h5>
                    
                    <p class="card-text">
                        Peso {{pokemon.peso}} lbs<br>
                        Altura {{pokemon.altura}} "<br>
                        Base stats
                    </p>
                    
                    <hr>
                    <div class="row">
                        <PokemonStatus label="PvMax" :valor="pokemon.pvMax" :color="cor2"></PokemonStatus>
                        <PokemonStatus label="Ataque" :valor="pokemon.ataque" :color="cor2"></PokemonStatus>
                        <PokemonStatus label="Defesa" :valor="pokemon.defesa" :color="cor2"></PokemonStatus>
                        <PokemonStatus label="Ataque Esp." :valor="pokemon.ataqueEspecial" :color="cor2"></PokemonStatus>
                        <PokemonStatus label="Defesa Esp." :valor="pokemon.defesaEspecial" :color="cor2"></PokemonStatus>
                        <PokemonStatus label="Velocidade" :valor="pokemon.velocidade" :color="cor2"></PokemonStatus>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <router-link :to="`/pokemons/${Math.max(Number(pokemon.id) - 1, 1)}`">
                            <button type="button" :class="{disabled: Number(pokemon.id) === 1}" class="btn text-light" :style="{'background\-color': cor1}">
                                <i class="bi bi-arrow-left-square"></i> Anterior
                            </button>
                        </router-link>
                    </div>
                    <div class="col">
                        <router-link :to="`/pokemons/${Math.min(Number(pokemon.id) + 1, 151)}`">
                            <button type="button" :class="{disabled: Number(pokemon.id) === 151}" class="btn text-light" :style="{'background\-color': cor2}">
                                <i class="bi bi-arrow-right-square"></i> Próximo
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
</template>


<style scoped>

.pokemon-name {
    text-transform: capitalize;
    text-align: center;
}



</style>
