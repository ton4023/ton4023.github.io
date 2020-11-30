<template>
  <div class="flex flex-row items-center">
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
      ></label>
      <input
        type="checkbox"
        id="toggle"
        name="toggle"
        class="appearance-none w-full h-full active:outline-none focus:outline-none"
        @click="toggle === false ? (toggle = true) : (toggle = false)"
      />
    </div>
    <div class="mx-2">
      <span class="font-bold text-lg">{{
        toggle === false ? "Light Mode" : "Dark Mode"
      }}</span>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "DarkMode",
  setup(_, { emit }) {
    const toggle = ref(false);
    const store = useStore();

    localStorage.theme === "dark"
      ? (toggle.value = true)
      : (toggle.value = false);

    // watch(toggle, (toggle) => {
    //   toggle === true
    //     ? ((localStorage.theme = "dark"),
    //       console.log(`from DarkMode.vue ${localStorage.theme}`))
    //     : ((localStorage.theme = ""),
    //       console.log(`from DarkMode.vue ${localStorage.theme}`));
    // });
    console.log(store.state.theme);
    watch(toggle, (toggle) => {
      toggle === true
        ? (store.commit("SET_THEME", "dark"),
          emit("updatetheme", store.state.theme))
        : (store.commit("SET_THEME", "light"),
          emit("updatetheme", store.state.theme));
    });

    return { toggle };
  },
};
</script>
