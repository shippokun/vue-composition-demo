<template>
  <section>
    <h2>Options API Component</h2>
    <p>Counter: {{ counter }}, doubled counter: {{ doubledCounter }}</p>
    <input v-model.number="counter" type="number" />
    <button type="button" @click="setCounter">
      Lazy value 100 set counter
    </button>
    <button type="button" @click="resetCounter">Reset counter</button>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';

import { useStore } from '@/store';
import { MutationTypes } from '@/store/mutation-types';
import { ActionTypes } from '@/store/action-types';

export default defineComponent({
  name: 'CompositionAPIComponent',
  setup() {
    const store = useStore();

    const counter = computed({
      get: () => store.state.counter,
      set: (value: number) => store.commit(MutationTypes.SET_COUNTER, value),
    });
    const doubledCounter = computed(() => store.getters.doubledCounter);

    const resetCounter = () => {
      store.commit(MutationTypes.RESET_COUNTER);
    };

    const setCounter = () => {
      store.dispatch(ActionTypes.SET_COUNTER, 100);
    };

    return {
      counter,
      doubledCounter,
      resetCounter,
      setCounter,
    };
  },
});
</script>
