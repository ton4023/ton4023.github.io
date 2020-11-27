<template>
  <div class="w-28">
    <img :src="img" alt="profile" class="rounded-full" />
  </div>
  <div ref="profile" class="profile px-10">
    <h1 class="font-sans text-5xl font-bold">
      Hello. I'm narongpol
    </h1>
    <h2 class="text-2xl pt-4">Web Developer</h2>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import anime from "animejs";
export default {
  name: "Profile",
  setup() {
    const profile = ref();
    const img = ref(
      "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/17021665_1384850054910808_5868900520486235066_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFAnlYa2oA2m3xY0Kd5n9OxXcz5Wg6Ej_BdzPlaDoSP8JmGB7mBkWu9XMrox57T9EfhELyFh3Q0LhaM__6ekfdz&_nc_ohc=2z0gTQTiYHUAX_CUzd6&_nc_ht=scontent.fbkk22-1.fna&oh=222c7a74ef77e5cc53cd9a55b14bcc97&oe=5FE6C5FD"
    );
    onMounted(() => {
      anime({
        targets: profile.value,
        translateX: 50,
        delay: 1000,
        easing: "easeInOutSine",
        duration: 1000,
      });
    });

    return { profile, img };
  },
};
</script>
