<template>
  <article>
    <h1
      class="font-nunito font-bold dark:text-white text-5xl animate__animated animate__slow"
      :class="[scrollY >= rect ? 'animate__fadeInLeft' : '']"
    >
      About Me
    </h1>

    <div class="flex flex-row items-start md:p-10 p-4">
      <div class="w-1/6 justify-center md:p-10 pb-4">
        <img
          :src="img"
          class="md:w-28 md:h-32 w-24 h-24 rounded-lg shadow-lg"
        />
      </div>
      <div class="w-5/6">
        <!-- card -->
        <div
          class="mx-4 max-w-md md:max-w-6xl bg-gray-300 dark:bg-gray-600 rounded-lg shadow-lg"
        >
          <div
            class="px-6 py-4 text-justify text-black dark:text-white md:text-2xl text-xl font-prompt"
            style="text-indent: 50px"
            v-for="(item, key) in myAbout"
            :key="key"
          >
            {{ item }}
          </div>
        </div>
        <div
          class="border-t-2 border-gray-800 dark:border-white w-full relative mt-10"
        ></div>
        <div class="m-6 mx-10">
          <h2 class="font-semibold text-2xl text-gray-600 dark:text-white py-2">
            Basic info
          </h2>
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
  props: { rect: Number, scrollY: Number },
  components: {
    Contact,
  },
  setup() {
    const store = useStore();
    const img = ref(
      "https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.0-9/43185847_2081396695256137_4491209419815649280_n.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeGX7l-W2DqmQYn31PgfAeVILqo88SbQ6kAuqjzxJtDqQNspv4d4iu9z_hrEweOO7Qe2OdgJvcT3jMWnSa-yEzaO&_nc_ohc=49sgqZs2BT8AX8_oNmn&_nc_ht=scontent.fbkk2-6.fna&oh=07ec7dfbf590c3d548873a9937a66730&oe=601AB95E"
    );
    const {
      state: { myAbout },
    } = store;
    return { myAbout, img };
  },
};
</script>
:class="[
        scrollY > rect
          ? ('animate__animated', 'animate__fadeInLeft', 'animate__slow')
          : ('animate__animated', 'animate__fadeOutLeft', 'animate__slow'),
      ]"