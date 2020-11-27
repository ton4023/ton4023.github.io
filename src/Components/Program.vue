<template>
  <article class="flex flex-col">
    <h1 class="mx-2 font-bold text-xl">Skills</h1>
    <div class="flex flex-row mx-4">
      languages:
      <div class="mx-4" v-for="item in languages" :key="item">
        {{ item }}
      </div>
    </div>
    <div class="flex flex-row mx-4">
      framework:
      <div class="mx-4" v-for="item in frameworks" :key="item">
        {{ item }}
      </div>
    </div>
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
