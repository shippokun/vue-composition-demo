<template>
  <button id="normalButton" @click="clickHandler">Button</button>
  <button id="complexButton" @click="complexClickHandler">Complex Button</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export const createComponentStore = () => {
  const state = reactive({
    count: 0,
    flag: false,
  });
  return toRefs(state);
};
export type ComponentState = ReturnType<typeof createComponentStore>;

export const useComplexClickHandler = ({
  componentState,
}: {
  componentState: ComponentState;
}) => {
  return () => {
    console.log(componentState.count);
  };
};

export default defineComponent({
  setup() {
    const componentState = createComponentStore();

    const clickHandler = () => {
      window.alert('clicked');
    };

    const complexClickHandler = useComplexClickHandler({ componentState });

    return {
      componentState,
      clickHandler,
      complexClickHandler,
    };
  },
});
</script>
