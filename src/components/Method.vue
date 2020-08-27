<template>
  <button @click="clickHandler">Button</button>
  <button @click="complexClickHandler">Complex Button</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

const createComponentStore = () => {
  const state = reactive({
    count: 0,
    flag: false,
  });
  return toRefs(state);
};
type ComponentState = ReturnType<typeof createComponentStore>;

const useComplexClickHandler = ({
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
