import Vue from "vue";
import Vuex from "vuex";
import { clear, get, put } from "./storage";

Vue.use(Vuex);

const DEFAULT_STATE = () => ({
    count: get("count", 0)
});

const store = new Vuex.Store({
    strict: true,
    state: DEFAULT_STATE,
    mutations: {
        increment(state) {
            state.count++;
            put("count", state.count);
        },
        clear(state) {
            clear();
            const defaultState = DEFAULT_STATE();
            Object.keys(defaultState).forEach(
                key => (state[key] = defaultState[key])
            );
        }
    },
    getters: {
        count: state => state.count
    },
    actions: {
        increment(context) {
            context.commit("increment");
        },
        clear(context) {
            context.commit("clear");
        }
    }
});

export default store;
