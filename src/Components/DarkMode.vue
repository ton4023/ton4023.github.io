<template>
  <div class="flex flex-row justify-end items-center">
    <div
      class="relative rounded-full w-12 h-6 transition duration-200 ease-linear"
      :class="[toggle === true ? 'bg-green-400' : 'bg-gray-400']"
    >
      <label
        for="toggle"
        class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"
        :class="[
          toggle === true
            ? 'translate-x-full border-green-400'
            : 'translate-x-0 border-gray-400',
        ]"
      />
      <input
        type="checkbox"
        id="toggle"
        name="toggle"
        class="appearance-none w-full h-full active:outline-none focus:outline-none"
        @click="toggle === false ? (toggle = true) : (toggle = false)"
      />
    </div>
    <div class="mx-2">
      <span class="font-semibold text-lg text-white">{{
        toggle === false ? "Light Mode" : "Dark Mode"
      }}</span>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "DarkMode",
  setup(_, { emit }) {
    const toggle = ref(true);
    watch(toggle, (toggle) => {
      toggle === true
        ? (emit("theme", "dark"), (localStorage.theme = "dark"))
        : (emit("theme", "light"), (localStorage.theme = "light"));
    });

    return { toggle };
  },
};
</script>
