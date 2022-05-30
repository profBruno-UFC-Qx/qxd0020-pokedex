import Axios from 'axios'
import { defineStore } from 'pinia'

export const axios = Axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json"
    }
})

interface Pokemon {
    id: number,
    nome: string,
    img: string,
    tipos: string[],
    peso: number,
    altura: number,
    pvMax: number,
    ataque: number,
    defesa: number,
    ataqueEspecial: number,
    defesaEspecial: number,
    velocidade: number,
}

interface State {
    pokemons: Pokemon[],
    currentPokemon: Pokemon | null
}

export const pokemonStore = defineStore('pokemon', {
    state: (): State => ({
        pokemons: [],
        currentPokemon: null
    }),
    getters: {
        numberOfPokemons(state) {
            return state.pokemons.length
        },
        filteredPokemon: (state) => {
            return (text: string): Pokemon[] => {
                if(text.length == 0) {
                    return state.pokemons
                }
                return state.pokemons.filter(
                    pokemon => {
                        const informationConcatenated = pokemon.tipos.concat([pokemon.nome]).reduce((previous, current) => previous + current)
                        return informationConcatenated.includes(text)
                    }
                )
            }
        },
    },
    actions: {
        async getPokemons() {
            try {
                const response = await axios.get('http://localhost:8080/pokemons/')
                console.log("teste")
                this.pokemons = response.data
            } catch(error) {
                console.log(error);
            }
        },
        async getPokemon(id: number) {
            try {
                const response = await axios.get(`http://localhost:8080/pokemons/${id}`)
                this.currentPokemon = response.data
            } catch(error) {
                console.log(error);
            }
        }
    },
})

