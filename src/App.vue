<template>
  <button @click="download">Save</button>
  <div ref="el" class="container mx-auto flex flex-col justify-items-center">
    <div class="flex flex-row m-10 items-center">
      <div class="w-28">
        <img :src="img" alt="profile" class="rounded-full" />
      </div>
      <div class="px-10">
        <h1 class="font-sans text-5xl font-bold">Hello. I'm narongpol</h1>
        <h2 class="text-2xl pt-4">Web Developer</h2>
      </div>
    </div>
    <div class="flex flex-col mx-10">
      <about />
      <contact />
      <program />
      <experience />
      <education />
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

export default defineComponent({
  name: "App",
  components: {
    About,
    Contact,
    Program,
    Education,
    Experience,
  },
  setup() {
    const el = ref();
    const store = useStore();
    const download = () => {
      store.dispatch("download", el);
    };
    const img = ref(
      "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/17021665_1384850054910808_5868900520486235066_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFAnlYa2oA2m3xY0Kd5n9OxXcz5Wg6Ej_BdzPlaDoSP8JmGB7mBkWu9XMrox57T9EfhELyFh3Q0LhaM__6ekfdz&_nc_ohc=2z0gTQTiYHUAX_CUzd6&_nc_ht=scontent.fbkk22-1.fna&oh=222c7a74ef77e5cc53cd9a55b14bcc97&oe=5FE6C5FD"
    );
    return { el, img, download };
  },
});
</script>
