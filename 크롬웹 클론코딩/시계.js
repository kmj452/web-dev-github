const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const seconds = document.querySelector("#seconds");


function changeClock(){
    let today = new Date();
    const thisHour = String(today.getHours()).padStart(2,"0");
    const thisMinutes = String(today.getMinutes()).padStart(2,"0");
    hour.innerHTML = thisHour + "시";
    minute.innerHTML = thisMinutes+ "분";  
}
changeClock();
setInterval(changeClock, 1000);