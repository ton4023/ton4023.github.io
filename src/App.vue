<template>
  <div ref="root" class="container ">
    <button @click="print">Save</button>
    <div class="flex flex-row justify-start">
      <div class="flex flex-row m-10 items-center">
        <div class="w-28">
          <img
            :src="require('@/assets/profile.png')"
            alt="profile"
            class="rounded-full"
          />
        </div>
        <div class="px-10">
          <h1 class="font-sans text-5xl font-bold">Hello. I'm narongpol</h1>
          <h2 class="text-2xl pt-4">Web Developer</h2>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex flex-col m-10">
        <about />
        <contact />
        <program />
        <experience />
        <education />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import About from "./Components/About.vue";
import Contact from "./Components/Contact.vue";
import Program from "./Components/Program.vue";
import Education from "./Components/Education.vue";
import Experience from "./Components/Experience.vue";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
export default defineComponent({
  name: "App",
  components: {
    About,
    Contact,
    Program,
    Education,
    Experience,
  },
  setup() {
    const root = ref();
    const print = () => {
      // const pdf = new jsPDF();
      // html2canvas(root.value).then((canvas) => {
      //   const image = canvas.toDataURL("image/png");
      //   pdf.addImage(image, "PHG", 0, 10, 210, 297);
      //   pdf.save("resume" + ".pdf");
      // });

      html2canvas(root.value).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
        });
        // const imgProps = pdf.getImageProperties(imgData);
        // const pdfWidth = pdf.internal.pageSize.getHeight();
        // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.height;
        // pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.addImage(imgData, "PNG", 0, 0, 400, 300);
        pdf.save("resume.pdf");
      });
    };
    return { root, print };
  },
});
</script>
