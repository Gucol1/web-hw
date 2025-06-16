import React from 'react';
import './input.css';

type inputProps = {
	label: string;
	placeholder?: string;
	id?: string;
	type: string;
};

export function Input({ ...inputProps }: inputProps): React.ReactElement {
	const [value, setValue] = React.useState('');

	const handleInput = (event: any) => {
		setValue(event.target.value);
		const passwordNote = document.getElementById('password-note');
		if (passwordNote && inputProps.type === 'password') {
			if (value.length < 8 && value.length != 0) {
				passwordNote.style.display = 'block';
				passwordNote.className = 'error';
				passwordNote.innerHTML = 'Длина пароля минимум 8 символов!';
			} else {
				passwordNote.style.display = 'none';
			}
		}
	};

	return (
		<div className="input-container">
			<label className="label" htmlFor={inputProps.id}>
				{inputProps.label}
			</label>
			<input
				required
				className="input"
				type={inputProps.type}
				id={inputProps.id}
				placeholder={inputProps.placeholder}
				value={value}
				onChange={handleInput}
			/>
			{inputProps.type === 'password' && (
				<p id="password-note">Длина пароля должна быть 8 или более символов</p>
			)}
		</div>
	);
}
