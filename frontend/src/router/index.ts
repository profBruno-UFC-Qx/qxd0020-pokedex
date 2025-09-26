import { createRouter, createWebHistory } from 'vue-router'
import Pokedex from '@/pages/Pokedex.vue'
import PokemonExpandedCard from '@/pages/PokemonExpandedCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Pokedex, },
    { path: '/pokemons/:id', component: PokemonExpandedCard },
  ]
})

export default router
