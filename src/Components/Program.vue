<template>
  <article>
    <h1 class="font-bold text-xl">Skills</h1>
    <div v-for="item in languages" :key="item">{{ item }}</div>
    <div v-for="item in frameworks" :key="item">{{ item }}</div>
  </article>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "Program",
  setup() {
    const store = useStore();
    const state = reactive({});
    const {
      state: { myProgram },
    } = store;
    for (const key in myProgram) {
      Object.assign(state, myProgram[key]);
    }
    const { languages, frameworks } = state;
    return {
      languages,
      frameworks,
    };
  },
};
</script>
