import Vue from 'vue';
import Vuex from 'vuex';
import appService from '../app.service';
import postsModule from './posts';

Vue.use(Vuex);

const state = {
  isAuthenticated: false,
};

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  modules: {
    postsModule,
  },
  state,
  getters: {
    isAuthenticated: s => s.isAuthenticated,
  },
  actions: {
    logout(context) {
      context.commit('logout');
    },
    login(context, credentials) {
      return new Promise((resolve) => {
        appService.login(credentials)
          .then((data) => {
            context.commit('login', data);
            resolve();
          }).catch(() => window.alert('Could not Login!'));
      });
    },
  },
  mutations: {
    logout(s) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', null);
        window.localStorage.setItem('tokenExpiration', null);
      }
      s.isAuthenticated = false;
    },
    login(s, token) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', token.token);
        window.localStorage.setItem('tokenExpiration', token.expiration);
      }

      s.isAuthenticated = true;
    },
  },
});

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const expiration = window.localStorage.getItem('tokenExpiration');
    const timestamp = new Date().getTime() / 1000;

    if (expiration !== null && (parseInt(expiration, 10) - timestamp) > 0) {
      store.state.isAuthenticated = true;
    }
  });
}

export default store;
