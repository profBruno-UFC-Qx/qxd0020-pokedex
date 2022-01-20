<script setup lang="ts">

import PokemonStatus from '../components/PokemonStatus.vue';
import PokemonType from '../components/PokemonTypeBadge.vue';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue'
import { useRouter} from 'vue-router'

const store = useStore();

const props = defineProps<{
    id: number
}>();

store.dispatch('getPokemon', props.id);
const pokemon = computed(() => store.state.currentPokemon);

</script>

<template>
    
<div class="col" v-if="pokemon">
    <div class="card mt-3 mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="pokemon.img" class="card-img-top img-fluid rounded-start" alt="{{nome}}">
            </div>
            
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{pokemon.nome}} 
                        <small class="text-muted">
                            <PokemonType v-for="(tipo, i) in pokemon.tipos" :key="i" class="badge bg-secondary">{{tipo}}</PokemonType>
                        </small>
                    </h5>
                    
                    <p class="card-text">
                        Peso {{pokemon.peso}} lbs<br>
                        Altura {{pokemon.altura}} "<br>
                        Base stats
                    </p>
                    
                    <hr>
                    <div class="row">
                        <PokemonStatus label="PvMax" :valor="pokemon.pvMax"></PokemonStatus>
                        <PokemonStatus label="Ataque" :valor="pokemon.ataque"></PokemonStatus>
                        <PokemonStatus label="Defesa" :valor="pokemon.defesa"></PokemonStatus>
                        <PokemonStatus label="Ataque Esp." :valor="pokemon.ataqueEspecial"></PokemonStatus>
                        <PokemonStatus label="Defesa Esp." :valor="pokemon.defesaEspecial"></PokemonStatus>
                        <PokemonStatus label="Velocidade" :valor="pokemon.velocidade"></PokemonStatus>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
    
</template>