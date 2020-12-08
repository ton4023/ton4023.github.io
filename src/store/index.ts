import { createStore } from "vuex";
import RootState from "./type";
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
const state: RootState = {
  theme: "",

  loading: false,

  myAbout: [
    `งานก่อนหน้าทำเกี่ยวกับงานธุรการบัญชี เริ่มกลับมาเขียนโปรแกรม
    มีพื้นฐานการเขียนโค๊ด เข้าใจแนวคิดการเขียนโปรแกรมแบบ OOP/ MVC
    อาจไม่รู้ทุกเรื่อง แต่รู้ว่าควรหาคำตอบจากไหน
    ไม่ยึดติดกับภาษาโปรแกรมมิ่ง ปรับเปลี่ยนตามความเหมาะสมของงาน
    พร้อมรับความรู้ใหม่อยู่เสมอ ศึกษาเรียนรู้การเขียนโค๊ดเป็นประจำ และ พร้อมพัฒนาศักยภาพตัวเอง`,
  ],

  myContact: [
    {
      name: "ton4023",
      birthday: 'August 5, 1996',
      address:'Khlong Hoi Khong, Songkhla',
      email: "ton4023@gmail.com",
      phone: "062-5692976",
      line: "https://line.me/ti/p/8fROOCHDW_",
      github: "github.com/ton4023",
    },
  ],

  myProgram: [
    {
      languages: [
      "https://symbols-electrical.getvecta.com/stencil_25/41_javascript.4ce34e7594.svg",
       "https://symbols-electrical.getvecta.com/stencil_25/87_typescript.2ab2b3dcfe.svg", 
       "https://symbols-electrical.getvecta.com/stencil_91/59_php.eed3049ba1.svg"],
      frameworks: [
        "https://symbols-electrical.getvecta.com/stencil_25/89_vuejs.fc3ffff5cd.svg",
         "https://symbols-electrical.getvecta.com/stencil_79/87_expressjs.72a4a0d57c.svg", 
         "https://symbols-electrical.getvecta.com/stencil_97/2_tailwind-css.541185202d.svg"
        ],
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
  },
  SET_LOAD(state: RootState,payload: boolean){
    state.loading = payload
  }
}
const actions = {
  downloadPDF(context: any , payload: any) {
    context.commit('SET_LOAD',true)
    html2canvas(payload, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getHeight();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.height;
      pdf.addImage(imgData, "PNG", 10, 0, pdfWidth, pdfHeight);
      pdf.save("narongpol-prommajan.pdf");
      context.commit('SET_LOAD',false)
    }) 
  },
};

export default createStore({
  state,
  actions,
  mutations
});
