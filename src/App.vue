<template >
  <div :class="mode" class="flex flex-col">
    <div class="dark:bg-gray-800 bg-gray-200">
      <div class="bg-brand p-2 sticky top-0 z-10">
        <Darkmode @theme="theme" />
      </div>
      <section class="h-screen"><Profile /></section>
      <section class="container mx-auto" id="active_1">
        <About :active="active" />
      </section>
      <section class="container mx-auto" id="active_2">
        <Program :active="active" />
      </section>
      <section class="container mx-auto" id="active_3">
        <Experience />
      </section>
      <section class="container mx-auto mb-4" id="active_4">
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
    const theme = (event) => {
      mode.value = event;
    };
    const active = ref("");
    const onScroll = () => {
      const elements = document.querySelectorAll("[id^='active_']");
      const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      for (const element of elements) {
        const rect = element.getBoundingClientRect().top;
        if (rect > 0 && rect < height / 2) {
          active.value = [
            "animate__animated",
            "animate__fadeInDown",
            "animate__infinite",
            "animate__slower",
          ];
        }
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
      active,
    };
  },
};
</script>