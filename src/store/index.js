import Vue from 'vue';
import Vuex from 'vuex';

import types from './types';

import pokemon from './modules/pokemon';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1,
    is_completed: false,
    message: '',
  },
  getters: {
    isCountZero: (state) => !state.count,
    isCountCompleted: (state) => state.isCompleted,
    getMessage: (state) => state.message,
  },
  mutations: {
    [types.SET_COUNT]: (state, value) => {
      state.count = value;
    },
    [types.SET_MESSAGE]: (state, message) => {
      state.message = message;
    },
  },
  actions: {
    namaFunc: ({ commit }, payload) => {
      commit('BLABLABAL', payload);
      return true;
    },
  },
  modules: {
    pokemon,
  },
});

export default store;
