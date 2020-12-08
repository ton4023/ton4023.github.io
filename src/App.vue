<template>
  <div
    class="bg-fixed bg-center bg-no-repeat"
    :class="mode"
    :style="`background-image: url(${img})`"
  >
    <div class="w-full z-10 bg-black-200 sticky top-0 md:px-10">
      <DarkMode @updatetheme="theme" />
    </div>
    <div class="container mx-auto mt-auto">
      <div
        class="flex flex-col md:flex-row justify-center md:mx-20 mt-10 md:mt-auto"
      >
        <div class="md:w-4/12 md:m-10">
          <div
            class="bg-red-200 rounded md:rounded-lg md:w-96 md:p-10 pt-10 w-auto md:fixed"
          >
            <Profile />
          </div>
        </div>
        <div class="md:w-8/12 md:m-10">
          <div class="bg-green-200 rounded md:rounded-lg p-10">
            <About />
            <Program />
            <Experience />
            <Education />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import About from "./Components/About.vue";
import Program from "./Components/Program.vue";
import Education from "./Components/Education.vue";
import Experience from "./Components/Experience.vue";
import Profile from "./Components/Profile.vue";
import DarkMode from "./Components/DarkMode.vue";

export default defineComponent({
  name: "App",
  components: {
    About,
    Program,
    Education,
    Experience,
    Profile,
    DarkMode,
  },
  setup() {
    const mode = ref("");
    const theme = (event: string) => {
      mode.value = event;
    };
    const img = ref(
      "https://images.wallpapersden.com/image/download/blue-background-geometric-abstract_a2hrZ2mUmZqaraWkpJRnamtlrWZrZWU.jpg"
    );
    return {
      mode,
      theme,
      img,
    };
  },
});
</script>