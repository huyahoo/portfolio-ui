import { getField, updateField } from 'vuex-map-fields';

const SET_LOCALE = 'SET_LOCALE';

export default {
  namespaced: true,
  state: {
    locale: 'ja',
    availableLocales: ['en', 'ja'],
  },
  getters: {
    getField,
  },
  actions: {
    setLocale({ commit }, payload: string) {
      commit(SET_LOCALE, payload);
    },
  },
  mutations: {
    updateField,
    SET_LOCALE(state: { locale: string }, payload: string) {
      state.locale = payload;
    },
  },
};
