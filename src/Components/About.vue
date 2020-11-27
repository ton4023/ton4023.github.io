<template>
  <article>
    <h1 class="mx-2 font-bold text-xl">About Me</h1>
    <div class="mx-4" v-for="(item, key) in myAbout" :key="key">{{ item }}</div>
  </article>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "About",
  setup() {
    const store = useStore();
    const {
      state: { myAbout },
    } = store;
    return { myAbout };
  },
};
</script>
