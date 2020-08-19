import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = () => new Vuex.Store({
  state: {
    user: {},
    loggedin: false,
    fake_user: {
      'username' : 'admin',
      'password' : 'qwerty',
      'data': {
        'name': 'Андрей Бурдей',
        'bdate': '27.06.1998',
        'avatar': 'todd.jpg',
        'email': 'qwertyuiop@yandex.ru',
      }
    },
    error: false
  },

  getters: {
    USER: state => {
      return state.fake_user.data;
    },
    ISLOGGED: state => {
      return state.loggedin;
    },
    ISERROR: state => {
      return state.error;
    },
  },

  mutations: {
    SET_LOGGEDIN: (state, payload) => {
      state.loggedin = payload;
    },
    SET_USER: (state, payload) => {
      state.user = payload;
    },
    SET_ERROR: (state, payload) => {
      state.error = payload;
    },
  },

  actions: {
    AUTH: (context, payload) => {
        if (payload[0] != context.state.fake_user.username || payload[1] != context.state.fake_user.password) {
          context.commit('SET_ERROR', true);
        } else {
          console.log( 'success' );
          context.commit('SET_ERROR', false);
          context.commit('SET_LOGGEDIN', true);
          $nuxt.$router.push({ path: '/profile'});
          //this.$nuxt.$router.replace({ path: '/profile'});
        }
		},
   },
});

export default store
