function checkPassword(value:string) {
	const passwordNote = document.getElementById('password-note');
	if (passwordNote) {
		if (value.length < 8 && value.length != 0) {
			passwordNote.style.display = 'block';
			passwordNote.className = 'error';
			passwordNote.innerHTML = 'Длина пароля минимум 8 символов!';
		} else {
			passwordNote.style.display = 'none';
		}
	}
}

function convertToInputElement(element:HTMLElement | null) {
	if (element instanceof HTMLInputElement){
		return element;
	}
	else {
		console.error("Ошибка: Переданный элемент не является HTMLInputElement");
		return null; // Или выбросить исключение, в зависимости от логики вашего кода
	}
}

const passwordInput =convertToInputElement(document.getElementById('password'));
if (passwordInput) {
	passwordInput.addEventListener('input', () => {checkPassword(passwordInput.value)});
}
const button = document.getElementById('btn');

if (button) {
	button.addEventListener('click', () => checkData());
}


const checkData = () => {
	const passwordNote = document.getElementById('password-note');
	const passwordInput = convertToInputElement(document.getElementById('password'));
	const emailInput = convertToInputElement(document.getElementById('email'));

	let passwordData = '';
	let emailData = '';

	if (passwordInput) {
		passwordData = passwordInput.value;
	}

	if (emailInput) {
		emailData = emailInput.value;
	}

	if (passwordNote){
		if (passwordData === '12345678' && emailData === 'example@mail.com') {
			passwordNote.style.display = 'block';
			passwordNote.innerHTML = 'Успех!';
			passwordNote.className = 'success';
		} else {
			passwordNote.style.display = 'block';
			passwordNote.className = 'error';
			passwordNote.innerHTML = 'Ошибка! Введите example@mail.com / 12345678';
		}
	}

	sessionStorage.setItem('password', passwordData);
	sessionStorage.setItem('email', emailData);
};

const loadData = () => {
	const passwordData = convertToInputElement(document.getElementById('password'));
	const emailData = convertToInputElement(document.getElementById('email'));
	const passwordSession = sessionStorage.getItem('password');
	const emailSession = sessionStorage.getItem('email');


	if (passwordData && emailData && passwordSession && emailSession) {
		passwordData.value = passwordSession;
		emailData.value = emailSession;
	}
};

window.addEventListener('load', loadData);
