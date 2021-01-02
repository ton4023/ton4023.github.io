<template>
  <article>
    <h1 class="font-bold text-5xl text-white">About Me</h1>
    <div class="flex flex-row items-start p-10">
      <div class="w-1/6 justify-center py-10">
        <img :src="icons" class="w-24 h-24" />
      </div>
      <div class="w-5/6">
        <!-- card -->
        <div class="mx-4 max-w-md md:max-w-6xl">
          <div
            class="px-6 py-10 text-justify text-white text-xl font-semibold"
            v-for="(item, key) in myAbout"
            :key="key"
          >
            {{ item }}
          </div>
        </div>
        <div class="border-t-2 border-white w-full relative"></div>
        <div class="m-6 mx-10">
          <h2 class="font-semibold text-2xl text-white py-4">Basic info</h2>
          <Contact />
        </div>
      </div>
    </div>
  </article>
</template>

<script >
import { ref } from "vue";
import { useStore } from "vuex";
import Contact from "./Contact.vue";
export default {
  name: "About",
  components: {
    Contact,
  },
  setup() {
    const store = useStore();
    const icons = ref(
      "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQyMSA0MDV2OTJjMCA4LjM5OS02LjU5OSAxNS0xNSAxNWgtNjEuOGwtODguMi00Ny04OC4yIDQ3aC02MS44Yy04LjQwMSAwLTE1LTYuNjAxLTE1LTE1di05MmMwLTU3LjkgNDcuMS0xMDUgMTA1LTEwNWgxMjBjNTcuOSAwIDEwNSA0Ny4xIDEwNSAxMDV6IiBmaWxsPSIjZmFiZTJjIi8+PHBhdGggZD0ibTQyMSA0MDV2OTJjMCA4LjM5OS02LjU5OSAxNS0xNSAxNWgtNjEuOGwtODguMi00N3YtMTY1aDYwYzU3LjkgMCAxMDUgNDcuMSAxMDUgMTA1eiIgZmlsbD0iI2ZmOTEwMCIvPjxwYXRoIGQ9Im0zNzIuNCAzNjUuMDk5Yy0yLjk5OS0zLjMtNy4yLTUuMDk5LTExLjQtNS4wOTloLTIxMGMtNC4yIDAtOC40MDEgMS44LTExLjQgNS4wOTktMi42OTkgMy4zLTMuOSA3LjUtMy42IDExLjdsMTYuOCAxMzUuMjAxaDIwNi40bDE2LjgtMTM1LjJjLjMtNC4yMDEtLjkwMS04LjQwMS0zLjYtMTEuNzAxeiIgZmlsbD0iIzU3NWY2NCIvPjxwYXRoIGQ9Im0zOTEgMTgwYzAgMTYuNS0xMy41IDMwLTMwIDMwaC00LjUwMWMtMTYuOCA2Ny4yLTkyLjk5OSA4OC41LTk2LjU5OSA4OS4zOTktMS4xOTkuMy0yLjcwMS42MDEtMy45LjYwMXMtMi43MDEtLjMtMy45LS42MDFjLTMuNi0uODk5LTc5Ljc5OS0yMi4yLTk2LjU5OS04OS4zOTloLTQuNTAxYy0xNi41IDAtMzAtMTMuNS0zMC0zMCAwLTE5LjgwMSA0LjUwMS0zOS4zIDEzLjUtNTYuN2wxNi41LTMzLjNoMjEwbDE2LjUgMzMuM2M4Ljk5OSAxNy40IDEzLjUgMzYuODk5IDEzLjUgNTYuN3oiIGZpbGw9IiNmZmUwZDYiLz48cGF0aCBkPSJtMzkxIDE4MGMwIDE2LjUtMTMuNSAzMC0zMCAzMGgtNC41MDFjLTE2LjggNjcuMi05Mi45OTkgODguNS05Ni41OTkgODkuMzk5LTEuMTk5LjMtMi43MDEuNjAxLTMuOS42MDF2LTIxMGgxMDVsMTYuNSAzMy4zYzguOTk5IDE3LjQgMTMuNSAzNi44OTkgMTMuNSA1Ni43eiIgZmlsbD0iI2ZkY2RiZiIvPjxwYXRoIGQ9Im0zNzYgMzc2LjgtMTYuOCAxMzUuMmgtMTAzLjJ2LTE1MmgxMDVjNC4yIDAgOC40MDEgMS44IDExLjQgNS4wOTkgMi42OTkgMy4zIDMuOSA3LjUgMy42IDExLjcwMXoiIGZpbGw9IiM0NzRmNTQiLz48cGF0aCBkPSJtMTIxIDE4MGMwLTE2LjUgMTMuNS0zMCAzMC0zMCAzLjAyMSAwIDQ4LjAyMSAwIDQ1IDAgOC4yOTEgMCAxNS02LjcwOSAxNS0xNSAwLTExLjQ1NSA0LjQ2OC0yMi42MzIgMTIuMjYxLTMwLjY1OSAzLjI1Mi0zLjM1NCA0Ljc2MS04LjA0MiA0LjA3Mi0xMi42NzEtLjcwMy00LjYxNC0zLjUwMS04LjY1Ny03LjYwMy0xMC45MTMtMTQuOTU2LTguMjMyLTI2Ljc0OC0yMS41NDgtMzMuMjM3LTM3LjUxNS0xLjg3NS00LjYtNS45MTgtNy45ODMtMTAuNzgxLTkuMDIzLTQuOTA3LTEuMDI1LTkuOTMyLjQxLTEzLjUwNiAzLjg1My0yNi4xOTEgMjUuMTUxLTQxLjIwNiA2MC40ODMtNDEuMjA2IDk2LjkyOHoiIGZpbGw9IiM0NzRmNTQiLz48cGF0aCBkPSJtMzkxIDEzNXY0NWMwLTE2LjUtMTMuNS0zMC0zMC0zMCAwIDAtNDIuMDAxIDAtNDUgMC04LjQwMSAwLTE1LTYuNjAxLTE1LTE1IDAtNS4xMDEtLjkwMS0xMC4yMDEtMi43MDEtMTVoLTQyLjI5OWMtMTcuNzAxIDAtMzQuNTAxLTQuMi01MC43LTEyLjktMjEtMTEuNy0zNy41LTMwLjMtNDYuNS01Mi41LTUuMDk5LTEyLjktNy44LTI2LjEtNy44LTM5LjYgMC0zLjkgMS41LTcuOCA0LjUwMS0xMC40OTkgMi42OTktMy4wMDEgNi41OTktNC41MDEgMTAuNDk5LTQuNTAxaDkwYzc0LjM5OSAwIDEzNSA2MC42MDEgMTM1IDEzNXoiIGZpbGw9IiM1NzVmNjQiLz48cGF0aCBkPSJtMzkxIDEzNXY0NWMwLTE2LjUtMTMuNS0zMC0zMC0zMCAwIDAtNDIuMDAxIDAtNDUgMC04LjQwMSAwLTE1LTYuNjAxLTE1LTE1IDAtNS4xMDEtLjkwMS0xMC4yMDEtMi43MDEtMTVoLTQyLjI5OXYtMTIwYzc0LjM5OSAwIDEzNSA2MC42MDEgMTM1IDEzNXoiIGZpbGw9IiM0NzRmNTQiLz48Y2lyY2xlIGN4PSIyNTYiIGN5PSI0MzUiIGZpbGw9IiNmMGY3ZmYiIHI9IjE1Ii8+PHBhdGggZD0ibTI3MSA0MzVjMCA4LjM5OS02LjU5OSAxNS0xNSAxNXYtMzBjOC40MDEgMCAxNSA2LjU5OSAxNSAxNXoiIGZpbGw9IiNkZmU3ZjQiLz48L2c+PC9zdmc+"
    );
    const {
      state: { myAbout },
    } = store;
    console.log();
    return { myAbout, icons };
  },
};
</script>
