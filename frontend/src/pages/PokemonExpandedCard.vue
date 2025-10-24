<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute }  from 'vue-router'
import PokemonStatus from '../components/PokemonStatus.vue';
import PokemonType from '../components/PokemonTypeBadge.vue';
import type { Pokemon } from '@/types';
import { getById } from '@/services/pokemonService';
import { useColor } from '@/composables/useTypeColor';

const pokemon = ref<Pokemon>({} as Pokemon);
const route = useRoute()
const loading = ref(true)

const color1 = computed(() => pokemon.value.tipos[0])
const color2 = computed(() => {
    return pokemon.value.tipos.length > 1 ? pokemon.value.tipos[1] : color1.value
})

async function loadPokemon(id: number) {
    try {
        const res = await getById(Number(id));
        pokemon.value = res.data;
    } catch (e) {
        window.alert(e);
    } finally {
        loading.value = false;
    }
}

onMounted(async () => {
    await loadPokemon(Number(route.params.id));
})

onBeforeRouteUpdate( async (to, from) => {
    if(to.params.id != from.params.id) {
        await loadPokemon(Number(to.params.id))
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
        <div class="row g-0">
            <h5 class="card-title pokemon-name" :style="{'background\-color': useColor(color1)}" >{{pokemon.nome}}</h5>
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
                        <PokemonStatus label="PvMax" :valor="pokemon.pvMax" :color="useColor(color2)"></PokemonStatus>
                        <PokemonStatus label="Ataque" :valor="pokemon.ataque" :color="useColor(color2)"></PokemonStatus>
                        <PokemonStatus label="Defesa" :valor="pokemon.defesa" :color="useColor(color2)"></PokemonStatus>
                        <PokemonStatus label="Ataque Esp." :valor="pokemon.ataqueEspecial" :color="useColor(color2)"></PokemonStatus>
                        <PokemonStatus label="Defesa Esp." :valor="pokemon.defesaEspecial" :color="useColor(color2)"></PokemonStatus>
                        <PokemonStatus label="Velocidade" :valor="pokemon.velocidade" :color="useColor(color2)"></PokemonStatus>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <router-link :to="`/pokemons/${Math.max(pokemon.id - 1, 1)}`">
                            <button type="button" class="btn text-light" :disabled="pokemon.id == 1" :style="{'background\-color': useColor(color1)}">
                                <i class="bi bi-arrow-left-square"></i> Anterior
                            </button>
                        </router-link>
                    </div>
                    <div class="col">
                        <router-link :to="`/pokemons/${Math.min(251, Number(pokemon.id) + 1)}`">
                            <button type="button" class="btn text-light" :disabled="pokemon.id == 251" :style="{'background\-color': useColor(color2)}">
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
