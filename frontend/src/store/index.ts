import { createStructuralDirectiveTransform } from '@vue/compiler-core';
import axios from 'axios'
import { createStore } from 'vuex'

const state = {
    pokemons: [],
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
}

const mutations = {
    setPokemons(state, pokemons) {
        state.pokemons = pokemons;
    }

}


export default createStore({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
})