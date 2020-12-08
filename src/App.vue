<template >
  <main :class="mode">
    <div
      class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-full dark:bg-gradient-to-r dark:from-gray-600 dark:to-gray-600"
    >
      <div class="w-full z-10 bg-black text-white sticky top-0 md:px-10">
        <DarkMode @updatetheme="theme" />
      </div>
      <div class="container mx-auto mt-auto">
        <div
          class="flex flex-col md:flex-row justify-center md:mx-20 mt-12 md:mt-auto lg:mx-auto"
        >
          <div class="md:w-4/12 md:m-10 md:pt-10 lg:m-10">
            <div
              class="bg-red-200 rounded md:rounded-lg md:w-96 md:p-10 pt-10 w-auto md:fixed lg:relative"
            >
              <Profile :scroll="scollTop" />
            </div>
          </div>
          <div class="md:w-8/12 md:m-10 lg:m-10">
            <div class="md:space-y-10 md:pt-10">
              <div
                class="bg-red-400 rounded md:rounded-r-lg p-10 shadow-xl dark:bg-gray-600 dark:text-gray-200"
              >
                <About />
              </div>
              <div
                class="bg-tomato-500 rounded md:rounded-r-lg p-10 shadow-xl dark:bg-gray-600 dark:text-gray-200"
              >
                <Program />
              </div>
              <div
                class="bg-orange-500 rounded md:rounded-r-lg p-10 shadow-xl dark:bg-gray-600 dark:text-gray-200"
              >
                <Experience />
              </div>
              <div
                class="bg-tomato-600 rounded md:rounded-r-lg p-10 shadow-xl dark:bg-gray-600 dark:text-gray-200"
              >
                <Education />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, onMounted } from "vue";

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
    const scollTop = ref(0);
    const theme = (event: string) => {
      mode.value = event;
    };
    const onScroll = (e: any) => {
      scollTop.value = e.target.documentElement.scrollTop;
      console.log(scollTop.value);
    };

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });
    return {
      mode,
      theme,
      scollTop,
    };
  },
});
</script>