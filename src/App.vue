<template>
  <div class="container mx-auto">
    <div class="flex flex-row justify-start">
      <div class="flex flex-row m-10 items-center">
        <div class="w-28">
          <img
            :src="require('@/assets/profile.png')"
            alt="profile"
            class="rounded-full"
          />
        </div>
        <div class="px-10">
          <h1 class="font-sans text-5xl font-bold">Hello. I'm narongpol</h1>
          <h2 class="text-2xl pt-4">Web Developer</h2>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex flex-col m-10">
        <about />
        <contact />
        <program />
        <education />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import About from "./Components/About.vue";
import Contact from "./Components/Contact.vue";
import Program from "./Components/Program.vue";
import Education from "./Components/Education.vue";
export default defineComponent({
  name: "App",
  components: {
    About,
    Contact,
    Program,
    Education,
  },
});
</script>
