const nameValue = document.querySelector("#nameValue");
const nameButton = document.querySelector("#nameButton");
const greeting = document.querySelector("#greeting");
const nameInput = document.querySelector("#nameInput");
const userChange = document.querySelector("#userChange");

const USERNAME_KEY = localStorage.getItem("USERNAME_KEY");

function textChange(){
    let newName = localStorage.getItem("USERNAME_KEY");
    if(newName != null){
        hideInput();
    }
    greeting.innerHTML = "안녕하세요 " + newName + "님!";
}

function clickEvent(){
    const userName = nameValue.value;
    localStorage.setItem("USERNAME_KEY", userName);
    textChange(userName);
    hideInput();
}

function hideInput(){
    nameInput.classList.add("hidden");
}

function changeUser(){
    localStorage.removeItem("USERNAME_KEY");
    window.location.reload();
}

if(USERNAME_KEY != null){ 
    textChange();
}else{
    nameButton.addEventListener("click", clickEvent);
}

userChange.addEventListener("click", changeUser);
