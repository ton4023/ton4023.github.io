<template>
  <button @click="download">Save</button>
  <div ref="el" class="container mx-auto">
    <div class="flex flex-col justify-items-center">
      <div class="flex flex-row m-10">
        <profile />
      </div>
      <div class="flex flex-col mx-10">
        <about />
        <contact />
        <program />
        <experience />
        <education />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

import About from "./Components/About.vue";
import Contact from "./Components/Contact.vue";
import Program from "./Components/Program.vue";
import Education from "./Components/Education.vue";
import Experience from "./Components/Experience.vue";
import Profile from "./Components/Profile.vue";

export default defineComponent({
  name: "App",
  components: {
    About,
    Contact,
    Program,
    Education,
    Experience,
    Profile,
  },
  setup() {
    const el = ref();
    const store = useStore();
    const download = () => {
      store.dispatch("download", el);
    };
    return { el, download };
  },
});
</script>
