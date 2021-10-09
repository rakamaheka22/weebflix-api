import axios from 'axios';

const stateModule = () => ({
  pokemon_list: [],
  pokemon_detail: null,
});

const gettersModule = {

};

const mutations = {
  SET_POKEMON: (state, data) => {
    state.pokemon_list = data;
  },
  SET_POKEMON_DETAIL: (state, data) => {
    state.pokemon_detail = data;
  },
  SET_POKEMON_DATA: (state, data) => {
    state.pokemon_detail = data.listPokemon;
    state.pokemon_list = data.detailPokemon;
  },
};

const actions = {
  findPokemonByName: async ({ commit, getters }, params) => {
    const API_URL = 'https://pokeapi.co/api/v2/';

    console.log(getters.isCountZero);

    const { param1, param2 } = params;

    console.log(param1, param2);

    const result = await axios.get(`${API_URL}pokemon/${param1}`);
    commit('SET_POKEMON_DATA', {
      listPokemon: result.data.abilities,
      detailPokemon: result.data.blabla,
    });
  },
  findPokemonByID: async ({ commit, getters }, id) => {
    const API_URL = 'https://pokeapi.co/api/v2/';

    console.log(getters.isCountZero);

    const result = await axios.get(`${API_URL}pokemon/${id}`);
    commit('SET_POKEMON_DETAIL', result.data.abilities);
  },
};

export default {
  namespaced: true,
  state: stateModule,
  getters: gettersModule,
  mutations,
  actions,
};
