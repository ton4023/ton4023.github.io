<template>
  <article class="flex flex-col justify-center">
    <div class="p-4">
      <h1 class="font-bold text-3xl"><i class="fas fa-code px-4"></i>Skills</h1>
    </div>
    <div class="flex md:flex-row flex-wrap mx-4 items-center">
      languages:
      <div class="p-4 md:px-4" v-for="item in languages" :key="item">
        <img :src="item" alt="" class="md:w-36 md:h-12 h-8 w-16" />
      </div>
    </div>
    <div class="flex md:flex-row flex-wrap mx-4 items-center">
      framework:
      <div class="p-4 md:px-4" v-for="item in frameworks" :key="item">
        <img :src="item" alt="" class="md:w-36 md:h-12 h-8 w-20" />
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
