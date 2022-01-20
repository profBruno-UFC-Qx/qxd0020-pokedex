import { createStructuralDirectiveTransform } from '@vue/compiler-core';
import axios from 'axios'
import { createStore } from 'vuex'

const state = {
    pokemons: [],
    currentPokemon: null
};

const getters = {
}

const actions = {
    async getPokemons({ commit }) {
        try {
            const response = await axios.get('http://localhost:8080/pokemons/');
            commit('setPokemons', response.data);
        } catch(error) {
            console.log(error);
        }
    },
    async getPokemon({ commit }, id: number) {
        try {
            const response = await axios.get(`http://localhost:8080/pokemons/${id}`);
            commit('setPokemon', response.data);
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


export default createStore({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
})