<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="w-32"
      :class="[
        scroll === true
          ? '-mt-12 md:-mt-2 -mb-6 md:-mb-2 transform -translate-y-8 scale-100 transition duration-300 ease-linear'
          : 'mb-20 mt-4 transform translate-y-8 scale-150 transition duration-300 ease-linear',
      ]"
    >
      <img
        :src="pic"
        alt="profile"
        class="rounded-full ring-4 ring-red-500 ring-opacity-50 ring-offset-2"
      />
    </div>
    <div ref="profile" class="text-center">
      <h1 class="font-bold text-4xl font-serif pb-10 text-blue-900">
        Narongpol Prommajan
      </h1>
      <h2
        class="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-red-500 hover:to-indigo-500 text-white rounded-full w-64 py-3 px-6 font-semibold text-2xl mx-auto"
      >
        Web Developer
      </h2>
    </div>
    <div>
      <contact class="py-10" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import Contact from "./Contact.vue";
export default {
  name: "Profile",
  components: {
    Contact,
  },
  props: {
    scroll: Boolean,
  },
  setup() {
    const profile = ref();
    const pic = ref(
      "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/17021665_1384850054910808_5868900520486235066_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFAnlYa2oA2m3xY0Kd5n9OxXcz5Wg6Ej_BdzPlaDoSP8JmGB7mBkWu9XMrox57T9EfhELyFh3Q0LhaM__6ekfdz&_nc_ohc=2z0gTQTiYHUAX_CUzd6&_nc_ht=scontent.fbkk22-1.fna&oh=222c7a74ef77e5cc53cd9a55b14bcc97&oe=5FE6C5FD"
    );

    return { profile, pic };
  },
};
</script>
