<script setup lang="ts">

import PokemonStatus from '../components/PokemonStatus.vue';
import PokemonType from '../components/PokemonTypeBadge.vue';
import { computed } from 'vue'
import { onBeforeRouteUpdate }  from 'vue-router'
import { getCorPorTipo } from '../mixin/pokemonCardMixin'
import { pokemonStore } from '../stores/pokemon';

const store = pokemonStore();

const props = defineProps<{
    id: string
}>();

const pokemon = computed(() => store.currentPokemon);

const cores  = computed(() => getCorPorTipo(pokemon.value ? pokemon.value.tipos : []))
const cor1 = computed(() => cores.value[0])
const cor2 = computed(() => cores.value[1])
const numberOfPokemons = computed(() => store.numberOfPokemons)

onBeforeRouteUpdate((to, from) => {
    if (to.params.id != from.params.id) {
        store.getPokemon(Number(to.params.id))
    }
})

store.getPokemon(Number(props.id))


</script>

<template>
<router-link to="/pokemons/">
    <button type="button" class="btn btn-outline-danger back-button">
        <i class="bi bi-arrow-left-circle"></i> Voltar
    </button>
</router-link> 
<div class="col" v-if="pokemon">
    <div class="card mt-3 mb-3">
        <div class="row g-0" :style="`background-color: ${cor1}`">
            <h5 class="card-title pokemon-name">{{pokemon.nome}}</h5>
        </div>
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="pokemon.img" class="card-img-top img-fluid rounded-start" alt="{{nome}}">
            </div>
            
            <div class="col-md-8">
                <div class="card-body text-start">
                    <h5 class="card-title">#{{id}}
                        <small class="text-muted">
                            <PokemonType v-for="(tipo, i) in pokemon.tipos" :key="i" class="badge" :style="{'background\-color': cores[i]}">{{tipo}}</PokemonType>
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
                        <router-link :to="`/pokemons/${Math.max(Number(id) - 1, 1)}`">
                            <button type="button" :class="{disabled: Number(id) === 1}" class="btn text-light" :style="{'background\-color': cor1}">
                                <i class="bi bi-arrow-left-square"></i> Anterior
                            </button>
                        </router-link>
                    </div>
                    <div class="col">
                        <router-link :to="`/pokemons/${Math.min(Number(id) + 1, numberOfPokemons)}`">
                            <button type="button" :class="{disabled: Number(id) === numberOfPokemons}" class="btn text-light" :style="{'background\-color': cor2}">
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
}

.back-button {
    position: absolute;
    top: 1em;
    left: 3em;
}

</style>
