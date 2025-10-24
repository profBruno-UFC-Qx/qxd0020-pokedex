import { createRouter, createWebHistory } from 'vue-router'
import Pokedex from '@/pages/Pokedex.vue'
import PokemonExpandedCard from '@/pages/PokemonExpandedCard.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Pokedex, },
    { path: '/pokemons/:id', component: PokemonExpandedCard },
    { path: '/notFound', component: NotFound},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

export default router
