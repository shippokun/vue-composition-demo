<template>
  <section>
    <h2>Options API Component</h2>
    <p>Counter: {{ counter }}, doubled counter: {{ doubledCounter }}</p>
    <input v-model.number="counter" type="number" />
    <button type="button" @click="resetCounter">Reset counter</button>
  </section>
</template>

<script>
// なぜか$storeに型が当たらなかったので致し方なくjsにした
import { defineComponent } from 'vue';
import { MutationTypes } from '@/store/mutation-types';
import { ActionTypes } from '@/store/action-types';

export default defineComponent({
  name: 'OptionsAPIComponent',
  computed: {
    counter: {
      get() {
        return this.$store.state.counter;
      },
      set(value) {
        this.$store.commit(MutationTypes.SET_COUNTER, value);
      },
    },
    doubledCounter() {
      return this.$store.getters.doubledCounter;
    },
  },
  methods: {
    resetCounter() {
      this.$store.commit(MutationTypes.RESET_COUNTER);
    },
    async getCounter() {
      const result = await this.$store.dispatch(ActionTypes.GET_COUNTER, 256);
      return result;
    },
  },
});
</script>
