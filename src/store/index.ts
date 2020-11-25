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
};

export default createStore({
  state,
});
