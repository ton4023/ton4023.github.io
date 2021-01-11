<template>
  <div class="flex flex-col-reverse items-center max-h-screen">
    <div class="w-1/2 mt-14 md:mt-16">
      <div
        ref="profile"
        class="text-center animate__animated animate__bounceInUp animate__slower"
      >
        <h1 class="text-5xl font-comfortaa pb-10 text-blue-900">
          I'm Narongpol Prommajan
        </h1>
        <h2
          class="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-red-500 hover:to-indigo-500 text-white rounded-full w-64 py-3 px-6 font-semibold text-2xl mx-auto"
        >
          Web Developer
        </h2>
      </div>
    </div>
    <div
      class="w-1/2 mt-10 md:mt-16 items-center text-center animate__animated animate__bounceInDown animate__slower"
    >
      <transition
        name="fade"
        leave-active-class="animate__animated animate__fadeOutUp animate__slow"
      >
        <div v-if="scrollY > 0">
          <Coding />
        </div>
        <div v-else>
          <CodeThinking />
        </div>
      </transition>
    </div>
  </div>

  <div
    v-if="scrollY <= 0"
    class="md:w-10 md:h-10 h-8 w-8 absolute inset-x-1/2 bottom-0 animate__animated animate__fadeInDown animate__infinite animate__slow"
  >
    <img :src="icon" />
  </div>
</template>
<script>
import { ref } from "vue";
import CodeThinking from "./CodeThinking";
import Coding from "./Coding";
export default {
  name: "Profile",
  props: {
    scrollY: Number,
  },
  components: { Coding, CodeThinking },
  setup() {
    const profile = ref();

    const icon = ref(
      "data:image/svg+xml;base64,PHN2ZyBpZD0iRmxhdCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgNDg4YTI0IDI0IDAgMCAxIC0yNC0yNHYtNDE2YTI0IDI0IDAgMCAxIDQ4IDB2NDE2YTI0IDI0IDAgMCAxIC0yNCAyNHoiIGZpbGw9IiM4NjkwZmEiLz48cGF0aCBkPSJtMjU2IDQ4OGEyMy45MjggMjMuOTI4IDAgMCAxIC0xNi45NzEtNy4wMjlsLTE0NC0xNDRhMjQgMjQgMCAwIDEgMzMuOTQyLTMzLjk0MmwxMjcuMDI5IDEyNy4wMyAxMjcuMDI5LTEyNy4wM2EyNCAyNCAwIDAgMSAzMy45NDIgMzMuOTQybC0xNDQgMTQ0YTIzLjkyOCAyMy45MjggMCAwIDEgLTE2Ljk3MSA3LjAyOXoiIGZpbGw9IiM1MTUzZmYiLz48L3N2Zz4="
    );

    return { profile, icon };
  },
};
</script>

