<template>
  <div class="bg-gray-400 h-screen">
    <div class="container mx-auto sm:pt-4 shadow-lg">
      <div class="flex flex-col bg-gray-600 justify-center items-center">
        <div class="text-white font-semibold text-center p-6 sm:py-10 sm:px-4">
          <h1 class="text-4xl sm:text-6xl uppercase">narongpol prommajan</h1>
          <br />
          <h2 class="text-2xl sm:text-4xl uppercase">web developer</h2>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="block w-1/2">
          <div>
            <h1 class="capitalize">about</h1>
            <p>
              หางาน web developer ครับ มีพื้นฐานการเขียนโค๊ด เข้าใจ pattern
              การเขียนแบบ OOP/ MVC สามารถทำ Responsive Web Design
              เพื่อรองรับกับการใช้กับอุปกณ์อย่างหลากหลาย
              พร้อมรับความรู้ใหม่อยู่เสมอ ศึกษาเรียนรู้การเขียนโค๊ดเป็นประจำ และ
              พร้อมพัฒนาศักยภาพตัวเองตลอดเวลา
            </p>
          </div>
          <div>
            <h1>EXP</h1>
            <div>
              <p>หจก.บ้านบนดอย</p>
              <p>เปิดบิลใบกำกับภาษี</p>
              <p>ดูแลสต็อคสินค้า</p>
              <p>ประสานงานกับเซลล์และทีมขนส่ง</p>
              <p>IT Support</p>
            </div>
            <div>
              <h2>TOT</h2>
              <p>นักศึกษาฝึกสหกิจ</p>
              <p>พัฒนาระบบตรวจสอบสถานะเลขหมาย PRI (Primary Rate Interface)</p>
            </div>
          </div>
          <div>
            <h1>EDU</h1>
            <p>ระบบสารสนเทศ คณะบริหารธุรกิจ</p>
            <p>มทร.ศรีวิชัย</p>
            <p>ศิลป์-คำนวน</p>
            <p>ส่องแสง</p>
          </div>
        </div>
        <div class="block w-1/2">
          <div>
            <p>นาย ณรงค์พล พรหมจรรย์ อายุ 24 ปี</p>
            <p>135 ม.2 อ.คลองหอยโข่ง จ.สงขลา</p>
            <p>email:ton4023@gmail.com</p>
            <p>line: ton4023</p>
            <p>phone: 062-569-2976</p>
            <p>github: ton4023</p>
          </div>
          <div>
            <h1>Skills</h1>
            <p>programming languages: Javascript, Typescript ,PHP</p>
            <p>Framework & Libraries: Vue & Vuex, Express, TailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
