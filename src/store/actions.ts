import { ActionTree, ActionContext } from 'vuex';

import { State } from './state';
import { Mutations } from './mutations';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';

// commitのみ独自で定義
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.SET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number,
  ): Promise<number>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.SET_COUNTER]({ commit }, payload: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(MutationTypes.SET_COUNTER, payload);
        resolve();
      }, 1000);
    });
  },
};
