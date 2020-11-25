<template>
  <article>
    <h1 class="mx-2 font-bold text-xl">Education</h1>
    <div v-for="item in myEducation" :key="item">
      <ul class="list-none m-4 p-0">
        <div class="border-r-2 border-gray-500 absolute h-14 m-3"></div>
        <li class="mb-2">
          <div class="flex items-center mb-1">
            <div class="bg-gray-500 rounded-full h-6 w-6"></div>
            <div class="flex-1 ml-4 font-medium">
              {{ item.year }} - {{ item.branch }}
            </div>
          </div>
          <div class="ml-12">
            <p>{{ item.name }}</p>
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Education",
  setup() {
    const store = useStore();
    const {
      state: { myEducation },
    } = store;
    return { myEducation };
  },
};
</script>
