<template>
  <article>
    <h1
      class="font-nunito font-bold dark:text-white text-5xl animate__animated animate__slow"
      :class="[scrollY >= rect ? 'animate__fadeInLeft' : '']"
    >
      Experience
    </h1>
    <div class="flex flex-col" v-for="item in myExperience" :key="item">
      <!-- component -->
      <div class="flex flex-row relative font-prompt dark:text-gray-400">
        <div class="flex-1 mr-10 text-right mt-2 text-2xl">
          {{ item.year }}
        </div>
        <div class="ml-4 w-1/2">
          <div
            class="border-r-2 border-gray-500 border-dotted absolute h-full top-0 z-0"
          ></div>
          <ul class="list-none m-0 p-0">
            <li class="mb-2">
              <div class="flex items-center mb-1">
                <div class="w-12 h-12 z-10 -mx-6">
                  <img :src="icons" />
                </div>
                <div class="flex-1 ml-12 text-2xl">
                  {{ item.name }}
                </div>
              </div>
              <div class="ml-12" v-for="item in item.detail" :key="item">
                {{ item }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Experience",
  props: { rect: Number, scrollY: Number },
  setup() {
    const store = useStore();
    const icons = ref(
      "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnIGlkPSJYTUxJRF8zMl8iPjxnPjxnIGlkPSJYTUxJRF8xNjg3XyI+PGcgaWQ9IlhNTElEXzE2ODhfIj48ZyBpZD0iWE1MSURfMTc1NF8iPjxnIGlkPSJYTUxJRF8xODI1XyI+PGcgaWQ9IlhNTElEXzE4MjZfIj48ZyBpZD0iWE1MSURfMTgzMl8iPjxnIGlkPSJYTUxJRF8xODMzXyI+PGcgaWQ9IlhNTElEXzE4MzRfIj48ZyBpZD0iWE1MSURfMTgzNV8iPjxnIGlkPSJYTUxJRF8xODM2XyI+PGcgaWQ9IlhNTElEXzE4MzdfIj48ZyBpZD0iWE1MSURfMTg2OF8iPjxnIGlkPSJYTUxJRF8xODY5XyI+PGcgaWQ9IlhNTElEXzE4NzBfIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiM0MzYzNzUiIHI9IjI1NiIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48cGF0aCBkPSJtNTEyIDI1NmMwLTIuMjY1LS4wMzEtNC41MjMtLjA5LTYuNzc0bC0xODguOTg1LTE4OC45ODQtMTk3LjA0MyAzODYuMjAyIDU0LjA3IDU0LjA3YzI0LjAyNiA3LjQ2NCA0OS41NjcgMTEuNDg2IDc2LjA0OCAxMS40ODYgMTQxLjM4NSAwIDI1Ni0xMTQuNjE1IDI1Ni0yNTZ6IiBmaWxsPSIjMjc0YTU5Ii8+PGc+PGc+PGc+PHBhdGggZD0ibTM0NC4yODkgMTIxLjg1MmMtMy4wNzYtOTEuMDQ1LTgzLjI3LTg5LjE1LTg4LjMyNS04OC45MzktNS4wNTQtLjIxLTg1LjI0OS0yLjEwNi04OC4zMjQgODguOTM5LTMuMTc2IDk0LjAwOSAwIDE0Mi4yODQgMCAxNDIuMjg0aDE3Ni42NDljMCAuMDAxIDMuMTc2LTQ4LjI3NCAwLTE0Mi4yODR6IiBmaWxsPSIjYzY4MjU0Ii8+PHBhdGggZD0ibTM0NC4yOSAyNjQuMTRoLTg4LjI5di0yMzEuMjNjNS40My0uMjIgODUuMjItMS44NyA4OC4yOSA4OC45NCAzLjE4IDk0LjAxIDAgMTQyLjI5IDAgMTQyLjI5eiIgZmlsbD0iIzllNjUzZSIvPjxnPjxwYXRoIGQ9Im0yOTEuMjUzIDIxMy4wOTQtMzYuMDQ1IDUyLjk0NC0zNC40NjEtNTIuOTQ0LTU3LjMxMSAxMy4xM2MtMTYuNjUzIDMuODE1LTI4LjQ1OSAxOC42MzItMjguNDU5IDM1LjcxNnY4NC4xMWgyNDIuMDQ1di04NC4xMWMwLTE3LjA4NC0xMS44MDYtMzEuOTAxLTI4LjQ1OS0zNS43MTZ6IiBmaWxsPSIjZmY5MDhhIi8+PHBhdGggZD0ibTM3Ny4wMjIgMjYxLjk0djg0LjExaC0xMjEuODE0di04MC4wMTJsMzUuNjI5LTUyLjMwOC40MTUtLjYzNiA1Ny4zMTQgMTMuMTI2YzE2LjY1NCAzLjgxNCAyOC40NTYgMTguNjM4IDI4LjQ1NiAzNS43MnoiIGZpbGw9IiNmZjZmNjQiLz48Zz48cGF0aCBpZD0iWE1MSURfOTFfIiBkPSJtMjkxLjE4MyAxNzUuNjg5djM3LjQwNWwtMzUuOTc1IDYyLjk5Ni0zNC40NjEtNjIuOTk2di0zNy40MDV6IiBmaWxsPSIjZmZjNDczIi8+PHBhdGggZD0ibTI5MS4xODcgMTc1LjY4OXYzNy40MDZsLS4zNS42MzUtMzUuNjI5IDYyLjM2di0xMDAuNDAxeiIgZmlsbD0iI2ZmYjc0ZiIvPjxnPjxwYXRoIGlkPSJYTUxJRF85MF8iIGQ9Im0zMjIuNTAxIDExMS43NjVjLTIuNzc4LTQwLjg5NS0zNy42NTQtNjQuMTA1LTY2LjUzNi02NC4xMDVzLTYzLjc1OCAyMy4yMS02Ni41MzYgNjQuMTA1Yy03LjQ3NCAxLjQtMTIuNzc4IDguMzg1LTExLjk0NiAxNi4wNjVsMS4yODcgMTEuODgzYy44NzMgOC4wNjIgOC4xODMgMTMuOTQzIDE2LjI0NSAxMy4wN2wxLjM4OC0uMTVjMTYuNTAzIDQyLjk1NiA0My4xMzQgNTQuMDE2IDU5LjU2MyA1Ni41MjkgMTYuNDI5LTIuNTEzIDQzLjA2LTEzLjU3MiA1OS41NjMtNTYuNTI5bDEuMzg4LjE1YzguMDYyLjg3MyAxNS4zNzItNS4wMDggMTYuMjQ1LTEzLjA3bDEuMjg3LTExLjg4M2MuODMtNy42ODEtNC40NzQtMTQuNjY2LTExLjk0OC0xNi4wNjV6IiBmaWxsPSIjZmZkMDk3Ii8+PHBhdGggZD0ibTMzNC40NDIgMTI3LjgzLTEuMjg0IDExLjg4MWMtLjg2OSA4LjA2Ny04LjE4NCAxMy45NDMtMTYuMjM4IDEzLjA3NGwtMS4zODgtLjE1NmMtNi44NjEgMTcuODM0LTE1LjQ2IDMwLjE2OC0yNC4zNDUgMzguNjc2LTEyLjUxNiAxMS45OTctMjUuNjE2IDE2LjM5NC0zNS4yMjcgMTcuODYtLjI0Ni0uMDM5LS40OTMtLjA3OC0uNzUyLS4xM3YtMTYxLjM1OWMuMjYtLjAxMy41MDYtLjAxMy43NTItLjAxMyAyOC44ODQgMCA2My43NiAyMy4yMDMgNjYuNTM2IDY0LjA5OCA3LjQ4NCAxLjQgMTIuNzg5IDguMzkxIDExLjk0NiAxNi4wNjl6IiBmaWxsPSIjZmZjNDczIi8+PC9nPjwvZz48L2c+PHBhdGggZD0ibTMxNi4xMTUgNzAuMDg0Yy0xNS4xMzQtMjUuMzQ2LTUwLjU4Ny00MC40OTQtOTkuMTgtMjIuNDIxLTM5LjAyOSAxNC43NS0yNy41MDcgNjQuMTAyLTI3LjUwNyA2NC4xMDIgMjIuOTA1LS45MzEgNDAuODk3LTE3LjUyOSA0Ny4xMDYtMzIuMDkyIDE0Ljg1MiAxMy43MDcgNDAuNzg5IDI3LjU5OCA4NS45NjIgMzIuMDg4IDAtLjAwMSA0LjU1My0yMy4zNjYtNi4zODEtNDEuNjc3eiIgZmlsbD0iI2M2ODI1NCIvPjwvZz48cGF0aCBkPSJtNDIxLjY2NSAzMDguNjg1LTIzLjc1NiAxMTkuMzA1Yy0yLjg2IDE0LjE2Mi0xNS4zMDQgMjQuMzQzLTI5Ljc1NCAyNC4zNDNoLTIyNC4zMWMtMTQuNDgyIDAtMjYuOTQ3LTEwLjIyNC0yOS43NzYtMjQuNDI5bC0yMy43MzQtMTE5LjIwOGMtMy43MzUtMTguNzcyIDEwLjYzLTM2LjI4NiAyOS43NzUtMzYuMjg2aDI3MS43OGMxOS4xNDYgMCAzMy41IDE3LjUwMyAyOS43NzUgMzYuMjc1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im00MjEuNjY1IDMwOC42ODUtMjMuNzU2IDExOS4zMDVjLTIuODYgMTQuMTYyLTE1LjMwNCAyNC4zNDMtMjkuNzU0IDI0LjM0M2gtMTEyLjE1NXYtMTc5LjkyM2gxMzUuODljMTkuMTQ2IDAgMzMuNSAxNy41MDMgMjkuNzc1IDM2LjI3NXoiIGZpbGw9IiNlOWVkZjUiLz48ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMzY4LjIwOCIgZmlsbD0iI2U5ZWRmNSIgcng9IjM3LjIzNSIgcnk9IjI5LjIyOSIvPjxwYXRoIGQ9Im0yOTMuMjQgMzY4LjIxYzAgMTYuMTQtMTYuNjggMjkuMjMtMzcuMjQgMjkuMjN2LTU4LjQ2YzIwLjU2IDAgMzcuMjQgMTMuMDkgMzcuMjQgMjkuMjN6IiBmaWxsPSIjY2RkMmUwIi8+PC9nPjxwYXRoIGQ9Im0zMjIuNSAxMTEuNzZjLTI5LjcyLTIuOTUtNTEuMTEtOS45OC02Ni41LTE4LjM0di01My42NmMyOC41Mi0uNDQgNDkuNDEgMTIuMzkgNjAuMTIgMzAuMzIgMTAuOTMgMTguMzEgNi4zOCA0MS42OCA2LjM4IDQxLjY4eiIgZmlsbD0iIzllNjUzZSIvPjwvZz48L2c+PC9zdmc+"
    );
    const {
      state: { myExperience },
    } = store;
    return { myExperience, icons };
  },
};
</script>
