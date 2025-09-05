const TOKEN = "7674901886:AAGGrTsk9aaxS4HaL7po-CJTNUmu_QFVlu0";
const CHAT_ID = "-4960630774"; 
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const succes = document.querySelector(".succes");

document.getElementById("form").addEventListener("submit", function(element) {
    element.preventDefault();

    let message = `<b>Заявка з сайту</b>\n`;
    message += `<b>Ім'я:</b> ${this.name.value}\n`;
    message += `<b>Телефон:</b> ${this.phone.value}\n`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    })
    .then((res) => {
        succes.classList.remove("disp");
    })
    .catch((err) => {
        console.warn("error");
    })
    .finally(() => {
        console.log("скрипт выконано!");
    });
});
