import { api } from './'

export async function getAll() {
  return api.get('/pokemons')
}

export async function getById(id: number) {
  return api.get(`/pokemons/${id}`)
}