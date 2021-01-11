<template>
  <article>
    <h1
      class="font-nunito font-bold dark:text-white text-5xl animate__animated animate__slow"
      :class="[scrollY >= rect ? 'animate__fadeInLeft' : '']"
    >
      Skills
    </h1>
    <div class="flex flex-col items-center">
      <div class="h-full">
        <img :src="icons" class="h-72" />
        <div class="pt-10">
          <span class="font-semibold dark:text-gray-200 text-3xl"
            >languages / framework</span
          >
        </div>
      </div>
      <div class="flex flex-wrap md:flex-row md:max-w-6xl m-10">
        <div class="p-4 md:px-6" v-for="item in languages" :key="item">
          <img :src="item" alt="" class="md:w-36 md:h-12 h-8 w-16" />
        </div>
        <div class="p-4 md:px-6" v-for="item in frameworks" :key="item">
          <img :src="item" alt="" class="md:w-36 md:h-12 h-8 w-auto" />
        </div>
      </div>
      <div class="h-full">
        <div class="pt-10">
          <span class="font-semibold dark:text-gray-200 text-3xl"
            >Software</span
          >
        </div>
      </div>
      <div class="flex flex-wrap md:flex-row md:max-w-6xl m-10">
        <div class="p-4 md:px-6" v-for="item in tools" :key="item">
          <img :src="item" alt="" class="md:w-14 md:h-14 h-8 w-14" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Program",
  props: { rect: Number, scrollY: Number },
  setup() {
    const store = useStore();
    const state = reactive({});
    const icons = ref(
      "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zOSA2MWgtMTl2LTcuNDJhNi4wMTMgNi4wMTMgMCAwIDEgNC40Mi01Ljc5bDQuNTgtMS43OSAzIDMgMy0zIDQuNTggMS43OWE2LjAxMyA2LjAxMyAwIDAgMSA0LjQyIDUuNzl2Ny40MnoiIGZpbGw9IiMwMGNjYjMiLz48cGF0aCBkPSJtMzkgMzN2M2gtM2wtMi0yLTMgMmgtNnYtM2E3IDcgMCAwIDEgMTQgMHoiIGZpbGw9IiM4YjVlM2MiLz48cGF0aCBkPSJtMzUgNDMuMTl2Mi44MWwtMyAzLTMtM3YtMi44MWE1Ljk2MSA1Ljk2MSAwIDAgMCA2IDB6IiBmaWxsPSIjZmZiNjU1Ii8+PHBhdGggZD0ibTM4IDM2djJhNS45ODUgNS45ODUgMCAwIDEgLTMgNS4xOSA1Ljk2MSA1Ljk2MSAwIDAgMSAtNiAwIDUuNzUyIDUuNzUyIDAgMCAxIC0xLjI0LS45NSA1Ljk0NCA1Ljk0NCAwIDAgMSAtMS43Ni00LjI0di0yaDVsMy0yIDIgMnoiIGZpbGw9IiNmZmM0NzciLz48cGF0aCBkPSJtNjEgMTF2MTJhMSAxIDAgMCAxIC0xIDFoLTEwbC00IDR2LTRoLTZhMSAxIDAgMCAxIC0xLTF2LTEyeiIgZmlsbD0iI2ZmZGU1NSIvPjxwYXRoIGQ9Im02MSA3djRoLTIydi00YTEgMSAwIDAgMSAxLTFoMjBhMSAxIDAgMCAxIDEgMXoiIGZpbGw9IiNmZjUwMjMiLz48cGF0aCBkPSJtMjcgOHYxMmExIDEgMCAwIDEgLTEgMWgtN3Y0bC00LTRoLTExYTEgMSAwIDAgMSAtMS0xdi0xMnoiIGZpbGw9IiM1YWFhZTciLz48cGF0aCBkPSJtMjcgNHY0aC0yNHYtNGExIDEgMCAwIDEgMS0xaDIyYTEgMSAwIDAgMSAxIDF6IiBmaWxsPSIjZmY1MDIzIi8+PHBhdGggZD0ibTMyIDQyYTMgMyAwIDAgMSAtMy0zaDJhMSAxIDAgMCAwIDIgMGgyYTMgMyAwIDAgMSAtMyAzeiIgZmlsbD0iI2ZmYTczMyIvPjxwYXRoIGQ9Im0yNCA1NWgydjZoLTJ6IiBmaWxsPSIjMDBiMzlkIi8+PHBhdGggZD0ibTM4IDU1aDJ2NmgtMnoiIGZpbGw9IiMwMGIzOWQiLz48cGF0aCBkPSJtMTEuMjkzIDE3LjcwNy0zLTNhMSAxIDAgMCAxIDAtMS40MTRsMy0zIDEuNDE0IDEuNDE0LTIuMjkzIDIuMjkzIDIuMjkzIDIuMjkzeiIgZmlsbD0iI2ZmOTgxMSIvPjxwYXRoIGQ9Im0xOC43MDcgMTcuNzA3LTEuNDE0LTEuNDE0IDIuMjkzLTIuMjkzLTIuMjkzLTIuMjkzIDEuNDE0LTEuNDE0IDMgM2ExIDEgMCAwIDEgMCAxLjQxNHoiIGZpbGw9IiNmZjk4MTEiLz48cGF0aCBkPSJtNDUuNzA3IDIwLjcwNy0xLjQxNC0xLjQxNCAyLjI5My0yLjI5My0yLjI5My0yLjI5MyAxLjQxNC0xLjQxNCAzIDNhMSAxIDAgMCAxIDAgMS40MTR6IiBmaWxsPSIjZmY5ODExIi8+PHBhdGggZD0ibTUxIDE5aDZ2MmgtNnoiIGZpbGw9IiNmZmI2NTUiLz48ZyBmaWxsPSIjZmY5ODExIj48cGF0aCBkPSJtNDggNDNoOHYyaC04eiIvPjxwYXRoIGQ9Im00NC43NTcgMzRoOC40ODV2MmgtOC40ODV6IiB0cmFuc2Zvcm09Im1hdHJpeCguNzA3IC0uNzA3IC43MDcgLjcwNyAtMTAuMzk3IDQ0Ljg5OSkiLz48cGF0aCBkPSJtOCA0M2g4djJoLTh6Ii8+PHBhdGggZD0ibTE0IDMwLjc1N2gydjguNDg1aC0yeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTIwLjM1NSAyMC44NTgpIi8+PC9nPjwvc3ZnPg=="
    );
    const {
      state: { myProgram },
    } = store;
    for (const key in myProgram) {
      Object.assign(state, myProgram[key]);
    }
    const { languages, frameworks, tools } = state;
    return {
      languages,
      frameworks,
      tools,
      icons,
    };
  },
};
</script>
