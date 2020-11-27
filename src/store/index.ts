import { createStore } from "vuex";
import RootState from "./type";

const state: RootState = {
  myAbout: [
    "มีพื้นฐานการเขียนโค๊ด เข้าใจแนวคิดการเขียนโปรแกรมแบบ OOP/ MVC",
    "ไม่ยึดติดกับภาษาที่เขียน ปรับเปลี่ยนตามความเหมาะสมของงาน",
    "พร้อมรับความรู้ใหม่อยู่เสมอ ศึกษาเรียนรู้การเขียนโค๊ดเป็นประจำ และ พร้อมพัฒนาศักยภาพตัวเอง",
  ],

  myContact: [
    {
      name: "ton4023",
      email: "ton4023@gmail.com",
      phone: "0625692976",
      line: "https://line.me/ti/p/8fROOCHDW_",
      github: "https://github.com/ton4023",
    },
  ],

  myProgram: [
    {
      languages: ["Javascript", "Typescript", "PHP"],
      frameworks: ["Vue", "ExpressJS", "TailwinsCSS"],
    },
  ],

  myEducation: [
    {
      name: "คณะบริหารธุรกิจ มทร.ศรีวิชัย",
      branch: "ระบบสารสนเทศ",
      year: "2018",
    },
    {
      name: "วิทยาลัยเทคโนโลยีส่องแสงพณิชยการ",
      branch: "ศิลป์-คำนวน",
      year: "2014",
    },
  ],

  myExperience: [
    {
      name: "ห้างหุ้นส่วนจำกัด บ้านบนดอย",
      year: "Oct 2020",
      detail: ["เปิดบิลใบกำกับภาษี", "ดูแลสต็อคสินค้า", "IT Support"],
    },
    {
      name: "บริษัท ทีโอที จำกัด (มหาชน) ฝ่ายปฏิบัติการภาคใต้",
      year: "2017",
      detail: [
        "นักศึกษาฝึกสหกิจ",
        " - ระบบตรวจสอบสถานะเลขหมาย PRI (Primary Rate Interface)",
        " - คู่มือการปฎิบัติงาน (e-Book)",
      ],
    },
  ],
};

export default createStore({
  state,
});
