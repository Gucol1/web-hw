import React from 'react';
import './form.css';
import { Input } from '../../../features/input';
import { Checkbox } from '../../../features/checkbox';
import { Button } from '../../../features/button';

export function Form(): React.ReactElement {
	return (
		<form className="form-container">
			<Input
				type={'email'}
				label={'Логин'}
				placeholder={'example@mail.com'}
				id={'email'}
			/>
			<Input
				type={'password'}
				label={'Пароль'}
				placeholder={'Введите пароль'}
				id={'password'}
			/>
			<Checkbox label={'Сохранять сессию'} id={'checkbox'} />
			<Button id={'btn'} type={'button'} />
		</form>
	);
}
