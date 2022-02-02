import { createStructuralDirectiveTransform } from '@vue/compiler-core';
import Axios from 'axios'
import { createStore } from 'vuex'

export const axios = Axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json"
    }
})

const state = {
    pokemons: [],
    currentPokemon: null
};

const getters = {
    getNumberOfPokemons(state) {
        return state.pokemons.length
    },
    getFilteredPokemon: (state) => (text) => {
        if(text.length == 0) {
            return state.pokemons
        }
        return state.pokemons.filter(
            pokemon => {
                const informationConcatenated = pokemon.tipos.concat([pokemon.nome]).reduce((previous, current) => previous + current)
                return informationConcatenated.includes(text)
            }
        )
    },
}

const actions = {
    async getPokemons({ commit }) {
        try {
            const response = await axios.get('http://localhost:8080/pokemons/')
            commit('setPokemons', response.data)
        } catch(error) {
            console.log(error);
        }
    },
    async getPokemon({ commit }, id: number) {
        try {
            const response = await axios.get(`http://localhost:8080/pokemons/${id}`)
            commit('setPokemon', response.data)
        } catch(error) {
            console.log(error);
        }
    }
}

const mutations = {
    setPokemons(state, pokemons) {
        state.pokemons = pokemons;
    },
    setPokemon(state, pokemon) {
        state.currentPokemon = pokemon;
    }

}


export const store = createStore({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
})

