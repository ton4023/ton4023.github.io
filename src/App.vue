<template>
  <div class="container mx-auto">
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
          <h1 class="font-sans text-5xl font-bold">
            Hello. I'm narongpol prommajan
          </h1>
          <h2 class="text-2xl pt-4">Web Developer</h2>
        </div>
      </div>
      <address class="sm:flex flex-row m-10 font-Cambria text-lg hidden">
        <div class="p-4">
          <p>phone: <a href="tel:062-5692976">062-5692976</a></p>
          <p>
            email:
            <a href="mailto:ton4023@gmail.com">ton4023@gmail.com</a>
          </p>
        </div>
        <div class="p-4">
          <p>
            line:
            <a href="https://line.me/ti/p/8fROOCHDW_" add target="_blank"
              >ton4023</a
            >
          </p>
          <p>
            github:
            <a href="https://github.com/ton4023" add target="_blank">ton4023</a>
          </p>
        </div>
      </address>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex flex-col m-10">
        <article>
          <h1 class="mx-2 font-bold text-xl">About Me</h1>
          <!-- <pre class="-mx-24 pt-6 text-lg">
              มีพื้นฐานการเขียนโค๊ด เข้าใจแนวคิดการเขียนโปรแกรมแบบ OOP/ MVC ไม่ยึดติดกับภาษาที่เขียน ปรับเปลี่ยนตามความเหมาะสม
            สามารถทำ Responsive Web Design เพื่อรองรับกับการใช้กับอุปกณ์อย่างหลากหลาย
            พร้อมรับความรู้ใหม่อยู่เสมอ ศึกษาเรียนรู้การเขียนโค๊ดเป็นประจำ และ พร้อมพัฒนาศักยภาพตัวเอง
          </pre> -->
          <p class="text-left leading-relaxed mx-2 whitespace-pre-wrap">
            มีพื้นฐานการเขียนโค๊ด เข้าใจแนวคิดการเขียนโปรแกรมแบบ OOP/ MVC
            ไม่ยึดติดกับภาษาที่เขียน ปรับเปลี่ยนตามความเหมาะสมของงาน สามารถทำ
            Responsive Web Design เพื่อรองรับกับการใช้กับอุปกณ์อย่างหลากหลาย
            พร้อมรับความรู้ใหม่อยู่เสมอ ศึกษาเรียนรู้การเขียนโค๊ดเป็นประจำ และ
            พร้อมพัฒนาศักยภาพตัวเอง
          </p>
        </article>

        <div class="flex flex-row">
          <article class="w-1/2">
            <h1 class="mx-2 font-bold text-xl">Experience</h1>
            <ul class="list-none m-4 p-0">
              <div
                class="border-r-2 border-gray-500 absolute h-24 sm:h-36 m-3"
              ></div>
              <li class="mb-2">
                <div class="flex items-center mb-1">
                  <div class="bg-gray-500 rounded-full h-6 w-6"></div>
                  <div class="flex-1 ml-4 font-medium">
                    Oct 2017 - ห้างหุ้นส่วนจำกัด บ้านบนดอย
                  </div>
                </div>
                <div class="ml-12">
                  <p>- เปิดบิลใบกำกับภาษี</p>
                  <p>- ดูแลสต็อคสินค้า</p>
                  <p>- ประสานงานกับเซลล์และทีมขนส่ง</p>
                  <p>- IT Support</p>
                </div>
              </li>
              <div
                class="border-r-2 border-gray-500 absolute h-36 sm:h-20 m-3"
              ></div>
              <li class="mb-2">
                <div class="flex items-center mb-1">
                  <div class="bg-gray-500 rounded-full h-6 w-6"></div>
                  <div class="flex-1 ml-4 font-medium">
                    Oct 2017 - บริษัท ทีโอที จำกัด (มหาชน) ฝ่ายปฏิบัติการภาคใต้
                  </div>
                </div>
                <div class="ml-12">
                  <p>นักศึกษาฝึกสหกิจ</p>
                  <p>
                    - พัฒนาระบบตรวจสอบสถานะเลขหมาย PRI (Primary Rate Interface)
                  </p>
                  <p>- คู่มือการปฎิบัติงาน (e-Book)</p>
                </div>
              </li>
            </ul>
            <h1 class="mx-2 font-bold text-xl">Education</h1>
            <ul class="list-none m-4 p-0">
              <div class="border-r-2 border-gray-500 absolute h-24 m-3"></div>
              <li class="mb-2">
                <div class="flex items-center mb-1">
                  <div class="bg-gray-500 rounded-full h-6 w-6"></div>
                  <div class="flex-1 ml-4 font-medium">
                    Oct 2017 - ระบบสารสนเทศ
                  </div>
                </div>
                <div class="ml-12">
                  <p>คณะบริหารธุรกิจ มทร.ศรีวิชัย</p>
                </div>
              </li>
              <div class="border-r-2 border-gray-500 absolute h-18 m-3"></div>
              <li class="mb-2">
                <div class="flex items-center mb-1">
                  <div class="bg-gray-500 rounded-full h-6 w-6"></div>
                  <div class="flex-1 ml-4 font-medium">
                    Oct 2017 - ศิลป์-คำนวน
                  </div>
                </div>
                <div class="ml-12">
                  <p>วิทยาลัยเทคโนโลยีส่องแสงพณิชยการ</p>
                </div>
              </li>
            </ul>
          </article>
          <!-- <article class="w-1/2">
            <h1 class="mx-2 font-bold text-xl">Experience</h1>
            <section class="m-2">
              <h2 class="font-semibold">หจก.บ้านบนดอย</h2>
              <p>เปิดบิลใบกำกับภาษี</p>
              <p>ดูแลสต็อคสินค้า</p>
              <p>ประสานงานกับเซลล์และทีมขนส่ง</p>
              <p>IT Support</p>
            </section>
            <section class="m-2">
              <h2 class="font-semibold">บริษัท ทีโอที จำกัด (มหาชน) ฝ่ายปฏิบัติการภาคใต้)</h2>
              <h3>นักศึกษาฝึกสหกิจ</h3>
              <p>พัฒนาระบบตรวจสอบสถานะเลขหมาย PRI (Primary Rate Interface)</p>
              <p>คู่มือการปฎิบัติงาน (e-Book)</p>
            </section>
          </article>
          <article class="w-1/2">
            <h1 class="font-bold text-xl">Education</h1>
            <section>
              <h2>ระบบสารสนเทศ คณะบริหารธุรกิจ</h2>
              <p>มทร.ศรีวิชัย</p>
              <p>ศิลป์-คำนวน</p>
              <p>ส่องแสง</p>
            </section>
            <section class="py-6">
              <h1 class="font-bold text-xl">Skills</h1>
              <p>programming languages: Javascript, Typescript ,PHP</p>
              <p>Framework & Libraries: Vue & Vuex, Express, TailwindCSS</p>
            </section>
          </article> -->
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
