import { createStore } from "vuex";
import RootState from "./type";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
const state: RootState = {
  theme:"",

  myAbout: [
    "มีพื้นฐานการเขียนโค๊ด เข้าใจแนวคิดการเขียนโปรแกรมแบบ OOP/ MVC",
    "ไม่ยึดติดกับภาษาที่เขียน ปรับเปลี่ยนตามความเหมาะสมของงาน",
    "พร้อมรับความรู้ใหม่อยู่เสมอ ศึกษาเรียนรู้การเขียนโค๊ดเป็นประจำ และ พร้อมพัฒนาศักยภาพตัวเอง",
  ],

  myContact: [
    {
      name: "ton4023",
      email: "ton4023@gmail.com",
      phone: "062-5692976",
      line: "https://line.me/ti/p/8fROOCHDW_",
      github: "github.com/ton4023",
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
const mutations = {
  SET_THEME(state: RootState,payload: string){
    state.theme = payload
  }
}
const actions = {
  downloadPDF(context: any, payload: any) {
    html2canvas(payload, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getHeight();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.height;
      pdf.addImage(imgData, "PNG", 10, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  },
};

export default createStore({
  state,
  actions,
  mutations
});
