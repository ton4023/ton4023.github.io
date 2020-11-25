<template>
  <article>
    <!-- <h1 class="mx-2 font-bold text-xl">Education</h1>
    <ul class="list-none m-4 p-0">
      <div class="border-r-2 border-gray-500 absolute h-24 m-3"></div>
      <li class="mb-2">
        <div class="flex items-center mb-1">
          <div class="bg-gray-500 rounded-full h-6 w-6"></div>
          <div class="flex-1 ml-4 font-medium">2018 - ระบบสารสนเทศ</div>
        </div>
        <div class="ml-12">
          <p>คณะบริหารธุรกิจ มทร.ศรีวิชัย</p>
        </div>
      </li>
      <div class="border-r-2 border-gray-500 absolute h-18 m-3"></div>
      <li class="mb-2">
        <div class="flex items-center mb-1">
          <div class="bg-gray-500 rounded-full h-6 w-6"></div>
          <div class="flex-1 ml-4 font-medium">2014 - ศิลป์-คำนวน</div>
        </div>
        <div class="ml-12">
          <p>วิทยาลัยเทคโนโลยีส่องแสงพณิชยการ</p>
        </div>
      </li>
    </ul> -->
  </article>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "Education",
  setup() {
    const store = useStore();
    const state = reactive({});
    const {
      state: { myEducation },
    } = store;
    return {};
  },
};
</script>
