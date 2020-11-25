import { createStore } from "vuex";
import RootState from "./type";

const state: RootState = {
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
      frameworks: ["Vue & Vuex", "Express", "TailwindCSS"],
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
