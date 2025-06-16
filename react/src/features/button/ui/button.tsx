import React from 'react';
import './button.css';
import { convertToInputElement } from '../../../functions/convert';
import { pop } from '../../../functions/particle';

type buttonProps = {
	id: string;
	type?: 'submit' | 'reset' | 'button' | undefined;
};

export function Button({ ...props }: buttonProps): React.ReactElement {
	const checkData = (e: any) => {
		const passwordNote = document.getElementById('password-note');
		const passwordInput = convertToInputElement(
			document.getElementById('password'),
		);
		const emailInput = convertToInputElement(document.getElementById('email'));
		pop(e);

		let passwordData = '';
		let emailData = '';

		if (passwordInput) {
			passwordData = passwordInput.value;
		}

		if (emailInput) {
			emailData = emailInput.value;
		}

		if (passwordNote) {
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

	return (
		<button
			id={props.id}
			className="btn"
			type={props.type}
			data-type="shadow"
			onClick={checkData}
		>
			Войти в аккаунт
		</button>
	);
}
