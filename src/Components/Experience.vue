<template>
  <article>
    <h1 class="mx-2 font-bold text-xl">Experience</h1>
    <ul class="list-none m-4 p-0">
      <div v-for="item in myExperience" :key="item">
        <div class="border-r-2 border-gray-500 absolute h-24 m-3"></div>
        <li class="mb-2">
          <div class="flex items-center mb-1">
            <div class="bg-gray-500 rounded-full h-6 w-6"></div>
            <div class="flex-1 ml-4 font-medium">
              {{ item.year }} - {{ item.name }}
            </div>
          </div>
          <div class="ml-12" v-for="item in item.detail" :key="item">
            {{ item }}
          </div>
        </li>
      </div>
    </ul>
  </article>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Experience",
  setup() {
    const store = useStore();
    const {
      state: { myExperience },
    } = store;
    return { myExperience };
  },
};
</script>
