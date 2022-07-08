import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    globalNews: [],
    newsByCategory: [],
    allNews: [],
  },
  getters: {
    getGlobalNews: (state) => state.globalNews,
    getNewsByCategory: (state) => state.newsByCategory,
    getAllNews: (state) => state.allNews,
  },
  mutations: {
    SET_GLOBAL_NEWS(state, payload) {
      state.globalNews = payload;
    },
    SET_NEWS_BY_CATEGORY(state, payload) {
      state.newsByCategory = payload;
    },
    SET_ALL_NEWS(state, payload) {
      state.allNews = payload;
    },
  },
  actions: {
    async fetchGlobalNews({ commit }) {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=global&sortBy=popularity&apiKey=a261332ab0bd4db8b176aa9e6adc6e11`
      );
      commit('SET_GLOBAL_NEWS', res.data);
      return res;
    },

    async fetchNewsByCategory({ commit }, category) {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a261332ab0bd4db8b176aa9e6adc6e11`
      );
      commit('SET_NEWS_BY_CATEGORY', res.data);
      return res;
    },
    async fetchAllNews({ commit }, searchTerm) {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=popularity&apiKey=a261332ab0bd4db8b176aa9e6adc6e11`
      );
      commit('SET_ALL_NEWS', res.data);
      return res;
    },
  },
  modules: {},
});
