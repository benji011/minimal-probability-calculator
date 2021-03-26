import { createStore } from "vuex";
import axios from "axios";
import { TYPES } from "@/constants";

export default createStore({
  state: {
    combinedWith: {
      probability: {
        first: 0,
        second: 0
      },
      result: 0
    },
    either: {
      probability: {
        first: 0,
        second: 0
      },
      result: 0
    }
  },
  getters: {
    getProbabilityCombinedWith: state => {
      return state.combinedWith.probability;
    },
    getProbabilityEither: state => {
      return state.either.probability;
    },
    getResultCombinedWith: state => {
      return state.combinedWith.result;
    },
    getResultEither: state => {
      return state.either.result;
    }
  },
  mutations: {
    calculateCombinedWith: state => {
      state.combinedWith.result =
        state.combinedWith.probability.first *
        state.combinedWith.probability.second;
    },
    calculateEither: state => {
      state.either.result =
        state.either.probability.first +
        state.either.probability.second -
        state.either.probability.first * state.either.probability.second;
    },
    logCalculation: (state, type) => {
      let input = {};
      let result = 0;
      switch (type) {
        case TYPES.COMBINED_WITH:
          input = state.combinedWith.probability;
          result = state.combinedWith.result;
          break;
        case TYPES.EITHER:
          input = state.either.probability;
          result = state.either.result;
          break;
        default:
          throw new Error(`${type} does not exist`);
      }
      axios.post("http://localhost:5000/api/logger/", {
        date: new Date().toLocaleString(),
        type: type,
        input: input,
        result: result
      });
    }
  },
  actions: {
    calculateResult: (context, type) => {
      switch (type) {
        case TYPES.COMBINED_WITH:
          context.commit("calculateCombinedWith");
          break;
        case TYPES.EITHER:
          context.commit("calculateEither");
          break;
        default:
          throw new Error(`${type} does not exist`);
      }
    },
    logCalculation: (context, type) => {
      context.commit("logCalculation", type);
    }
  },
  modules: {}
});
