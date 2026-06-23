/* =====================================
   Dark Mode
   ===================================== */

/*
   ค้นหาปุ่มที่มี id="themeBtn"
   แล้วเก็บไว้ในตัวแปร themeBtn
*/
const themeBtn = document.getElementById("themeBtn");


/*
   รอฟังเหตุการณ์คลิกปุ่ม

   เมื่อผู้ใช้คลิกปุ่ม
   จะเรียกฟังก์ชันด้านในทำงาน
*/
themeBtn.addEventListener("click", () => {

    /*
       สลับ class ชื่อ dark-mode

       ถ้ายังไม่มี
       => เพิ่มเข้าไป

       ถ้ามีอยู่แล้ว
       => ลบออก

       ทำให้ CSS เปลี่ยนสีเว็บ
       ระหว่างโหมดสว่างและโหมดมืด
    */
    document.body.classList.toggle("dark-mode");

});


/* =====================================
   Show More Information
   ===================================== */

/*
   ค้นหาปุ่มแสดงข้อมูลเพิ่มเติม
*/
const infoBtn = document.getElementById("infoBtn");


/*
   ค้นหากล่องข้อมูลเพิ่มเติม
*/
const extraInfo = document.getElementById("extraInfo");


/*
   รอฟังการคลิกปุ่ม
*/
infoBtn.addEventListener("click", () => {

    /*
       ตรวจสอบว่า

       กล่องข้อมูลถูกซ่อนอยู่หรือไม่
    */
    if (extraInfo.style.display === "none") {

        /*
           ถ้าซ่อนอยู่

           เปลี่ยนเป็น block

           เพื่อให้แสดงผล
        */
        extraInfo.style.display = "block";

    } else {

        /*
           ถ้ากำลังแสดงอยู่

           เปลี่ยนเป็น none

           เพื่อซ่อนข้อมูล
        */
        extraInfo.style.display = "none";

    }

});


/* =====================================
   Live Input
   ===================================== */

/*
   ค้นหาช่องกรอกข้อความ
*/
const userInput = document.getElementById("userInput");


/*
   ค้นหาพื้นที่แสดงผลข้อความ
*/
const outputText = document.getElementById("outputText");


/*
   รอฟังเหตุการณ์ input

   Event นี้จะเกิดทุกครั้ง
   เมื่อผู้ใช้พิมพ์ ลบ หรือแก้ไขข้อความ
*/
userInput.addEventListener("input", () => {

    /*
       เปลี่ยนข้อความภายใน outputText

       โดยนำข้อความที่ผู้ใช้พิมพ์
       มาต่อท้ายคำว่า

       "คุณพิมพ์ : "
    */
    outputText.textContent =
        "คุณพิมพ์ : " + userInput.value;

});

/* =====================================
   Weather API
   ===================================== */

const weatherBtn = document.getElementById("weatherBtn");
const weatherResult = document.getElementById("weatherResult");

weatherBtn.addEventListener("click", async () => {

    weatherResult.textContent = "กำลังโหลดข้อมูล...";

    try {

        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=14.3532&longitude=100.5689&current=temperature_2m"
        );

        const data = await response.json();

        weatherResult.textContent =
            "อุณหภูมิปัจจุบัน : " +
            data.current.temperature_2m +
            " °C";

    } catch (error) {

        weatherResult.textContent =
            "ไม่สามารถโหลดข้อมูลได้";

    }

});