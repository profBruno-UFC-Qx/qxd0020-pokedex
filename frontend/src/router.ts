import { createRouter, createWebHistory } from 'vue-router'

import PokemonListCard from './views/PokemonListCard.vue'
import PokemonExpandedCard from './views/PokemonExpandedCard.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: PokemonListCard, alias: '/pokemons' },
    { name: 'details', path: '/pokemons/:id', component: PokemonExpandedCard, props: true }
  ],
});