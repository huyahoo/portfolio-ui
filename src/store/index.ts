import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import global from '@/store/global';

export default createStore({
  plugins: [
    createPersistedState({
      key: 'portfolio-local-data',
      paths: ['global.locale', 'global.availableLocales'],
    }),
  ],
  modules: {
    global,
  },
});
