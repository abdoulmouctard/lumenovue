import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    getters: {
        count: state => state.count
    },
    actions: {
        increment(context) {
            context.commit("increment");
        }
    }
});

export default store;
