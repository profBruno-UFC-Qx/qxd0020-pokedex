<script setup lang="ts">

import PokemonStatus from './PokemonStatus.vue';
import PokemonType from './PokemonTypeBadge.vue';

const props = defineProps<{
    id: number,
    nome: string,
    value: number,
    tipos: string[],
    peso: number,
    altura: number,
    pvMax: number,
    ataque: number,
    defesa: number,
    ataqueEspecial: number,
    defesaEspecial : number,
    velocidade: number
}>();
</script>

<template>
    <div class="row">
        <div class="col">
            <div class="card mt-3 mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{id}}.png" class="card-img-top img-fluid rounded-start" alt="{{nome}}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{nome}} 
                            <small class="text-muted">
                                <PokemonType v-for="(tipo, i) in tipos" :key="i" class="badge bg-secondary">{{tipo}}</PokemonType>
                            </small>
                        </h5>
                        <p class="card-text">
                            Peso {{peso}} lbs<br>
                            Altura {{altura}} "<br>
                            Base stats
                        </p>
                        <hr>
                        <div class="row">
                            <PokemonStatus label="PvMax" :valor="pvMax"></PokemonStatus>
                            <PokemonStatus label="Ataque" :valor="ataque"></PokemonStatus>
                            <PokemonStatus label="Defesa" :valor="defesa"></PokemonStatus>
                            <PokemonStatus label="Ataque Esp." :valor="ataqueEspecial"></PokemonStatus>
                            <PokemonStatus label="Defesa Esp." :valor="defesaEspecial"></PokemonStatus>
                            <PokemonStatus label="Velocidade" :valor="velocidade"></PokemonStatus>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
</template>