<template>
  <div class="flex justify-end mr-36">
    <div class="flex flex-row justify-items-center items-end">
      <div class="m-4">
        <DarkMode />
      </div>
      <div class="m-4">
        <Download :el="el" />
      </div>
    </div>
  </div>
  <div ref="el" :class="darkmode" class="container mx-auto">
    <div
      class="flex flex-col justify-items-center dark:bg-gray-600 dark:text-gray-200"
    >
      <div class="flex flex-row m-10">
        <Profile />
      </div>
      <div class="flex flex-col mx-10">
        <About />
        <Contact />
        <Program />
        <Experience />
        <Education />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from "vue";

import About from "./Components/About.vue";
import Contact from "./Components/Contact.vue";
import Program from "./Components/Program.vue";
import Education from "./Components/Education.vue";
import Experience from "./Components/Experience.vue";
import Profile from "./Components/Profile.vue";
import DarkMode from "./Components/DarkMode.vue";
import Download from "./Components/Download.vue";

export default defineComponent({
  name: "App",
  components: {
    About,
    Contact,
    Program,
    Education,
    Experience,
    Profile,
    DarkMode,
    Download,
  },
  setup() {
    const el = ref();
    const darkmode = ref("");

    localStorage.theme === "dark"
      ? (darkmode.value = "dark")
      : (darkmode.value = "");

    return {
      el,
      darkmode,
    };
  },
});
</script>