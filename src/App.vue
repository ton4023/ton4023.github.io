<template >
  <div :class="mode" class="flex flex-col">
    <div class="dark:bg-gray-800 bg-gray-200">
      <div class="bg-brand p-2 sticky top-0 z-50">
        <Darkmode @theme="theme" />
      </div>
      <section class="h-screen mx-auto"><Profile :scrollY="scrollY" /></section>
      <section class="container mx-auto" id="active_0">
        <About :rect="rect[0]" :scrollY="scrollY" />
      </section>
      <section class="container mx-auto" id="active_1">
        <Program :rect="rect[1]" :scrollY="scrollY" />
      </section>
      <section class="container mx-auto" id="active_2">
        <Experience :rect="rect[2]" :scrollY="scrollY" />
      </section>
      <section class="container mx-auto mb-4" id="active_3">
        <Education :rect="rect[3]" :scrollY="scrollY" />
      </section>
    </div>
  </div>
</template>

<script >
import { ref, onUnmounted, onMounted, reactive } from "vue";
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
    const mode = ref("dark");
    const theme = (event) => {
      mode.value = event;
    };
    const active = ref();
    const scrollY = ref(0);
    const rect = reactive([]);
    const onScroll = () => {
      const elements = document.querySelectorAll("[id^='active_']");
      scrollY.value = window.scrollY;
      for (const [index, element] of elements.entries()) {
        rect[index] = element.getBoundingClientRect().top;
        //   console.log(`scrollY: ${scrollY}, rect_${index}  : ${rect[index]}`);
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
      scrollY,
      rect,
    };
  },
};
</script>