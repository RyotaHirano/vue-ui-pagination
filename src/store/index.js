import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ]
  }
});

export default store