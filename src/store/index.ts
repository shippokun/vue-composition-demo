import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex';

import { State, state } from './state';
import { Getters, getters } from './getters';
import { Mutations, mutations } from './mutations';
import { MutationTypes } from './mutation-types';
import { Actions, actions } from './actions';

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});

// getters, commit, dispatchを独自に定義
export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<
    K extends MutationTypes.SET_COUNTER,
    P extends Parameters<Mutations[K]>[1]
  >(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
} & {
  commit<K extends MutationTypes.RESET_COUNTER>(
    key: K,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const useStore = () => {
  return store as Store;
};
