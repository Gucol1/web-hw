import React from 'react';
import './auth.css';
import { Header } from '../../../widgets/header';
import { Form } from '../../../widgets/form';
import { SocialButtonContainer } from '../../../widgets/socialButtonContainer';
import { Footer } from '../../../widgets/footer';
import { Snowfall } from '../../../features/snowfall';
import { convertToInputElement } from '../../../functions/convert';

export function Auth(): React.ReactElement {
	React.useEffect(() => {
		const passwordData = convertToInputElement(
			document.getElementById('password'),
		);
		const emailData = convertToInputElement(document.getElementById('email'));
		const passwordSession = sessionStorage.getItem('password');
		const emailSession = sessionStorage.getItem('email');

		if (passwordData && emailData && passwordSession && emailSession) {
			passwordData.value = passwordSession;
			emailData.value = emailSession;
		}
	}, []);

	return (
		<>
			<Header />
			<Snowfall />
			<main className={'container'}>
				<h2 className={'form-title'}>Авторизация</h2>
				<Form />
				<SocialButtonContainer />
			</main>
			<Footer />
		</>
	);
}
