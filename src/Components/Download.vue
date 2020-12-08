<template>
  <button
    class="bg-grey-light text-grey-darkest font-bold rounded inline-flex items-center focus:outline-none"
    @click="download"
  >
    <i
      :class="[loading === true ? 'fas fa-check' : 'fas fa-arrow-down']"
      class="fa-lg px-2"
    ></i>
    <span class="font-bold text-lg">Download</span>
  </button>
</template>

<script>
import { computed } from "vue";
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
    const loading = computed(() => store.state.loading);
    const download = () => {
      store.dispatch("downloadPDF", props.el);
    };
    return { download, loading };
  },
};
</script>
