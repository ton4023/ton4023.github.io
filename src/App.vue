<template >
  <div :class="mode" class="flex flex-col">
    <div class="dark:bg-gray-800 bg-gray-200">
      <section class="bg-brand p-2 sticky top-0 z-10">
        <Darkmode @theme="theme" />
      </section>
      <section class="h-screen"><Profile /></section>
      <section class="container mx-auto">
        <About />
      </section>
      <section class="container mx-auto">
        <Program />
      </section>
      <section class="container mx-auto">
        <Experience />
      </section>
      <section class="container mx-auto mb-4">
        <Education />
      </section>
    </div>
  </div>
</template>

<script >
import { ref, onUnmounted, onMounted } from "vue";
import About from "./Components/About.vue";
import Program from "./Components/Program.vue";
import Education from "./Components/Education.vue";
import Experience from "./Components/Experience.vue";
import Profile from "./Components/Profile.vue";
import Darkmode from "./Components/DarkMode.vue";

export default {
  name: "App",
  components: {
    About,
    Program,
    Education,
    Experience,
    Profile,
    Darkmode,
  },
  setup() {
    const mode = ref("");
    const profile = ref();
    const isActive = ref();
    const theme = (event) => {
      mode.value = event;
    };

    const onScroll = () => {
      const scrolled = window.pageYOffset;
      const eltop = profile.value.getBoundingClientRect().top;
      if (scrolled >= eltop) {
        isActive.value = true;
      } else {
        isActive.value = false;
      }
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
      isActive,
      profile,
    };
  },
};
</script>