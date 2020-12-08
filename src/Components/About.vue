<template>
  <article>
    <div class="p-4">
      <h1 class="font-bold text-3xl"><i class="fas fa-user px-4"></i>About</h1>
    </div>
    <div class="p-2">
      <div
        class="text-justify text-xl px-6"
        v-for="(item, key) in myAbout"
        :key="key"
      >
        {{ item }}
      </div>
    </div>
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
