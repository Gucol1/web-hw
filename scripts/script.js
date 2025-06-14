function checkPassword(value) {
    const passwordNote = document.getElementById("password-note");

    if (value.length < 8 && value.length != 0) {
        passwordNote.style.display = "block";
        passwordNote.className = "error";
        passwordNote.innerHTML = "Длина пароля минимум 8 символов!";
    }
    else{
        passwordNote.style.display = "none";
    }
}

const button = document.getElementById("btn");

button.addEventListener("click", () => checkData());

const checkData =() =>{
    const passwordNote = document.getElementById("password-note");
    const passwordData = document.getElementById("password").value;
    const emailData = document.getElementById("email").value;

    if (passwordData === "12345678" && emailData === "example@mail.com") {
        passwordNote.style.display = "block";
        passwordNote.innerHTML = "Успех!";
        passwordNote.className = "success";
    }
    else{
        passwordNote.style.display = "block";
        passwordNote.className = "error";
        passwordNote.innerHTML = "Ошибка! Введите example@mail.com / 12345678";
    }

    sessionStorage.setItem('password', passwordData);
    sessionStorage.setItem('email', emailData);
}

const loadData = () =>{
    const passwordData = document.getElementById("password");
    const emailData = document.getElementById("email");

    passwordData.value = sessionStorage.getItem('password');
    emailData.value = sessionStorage.getItem('email');
}

window.addEventListener("load", loadData);