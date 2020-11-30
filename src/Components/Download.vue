<template>
  <button
    class="bg-grey-light hover:bg-grey text-grey-darkest font-bold rounded inline-flex items-center"
    @click="download"
  >
    <svg
      class="w-6 h-6 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
    </svg>
    <span class="font-bold text-lg">Download</span>
  </button>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Download",
  props: {
    el: {
      default: null,
    },
  },
  setup(props) {
    const store = useStore();
    const download = () => {
      store.dispatch("downloadPDF", props.el);
    };
    return { download };
  },
};
</script>
