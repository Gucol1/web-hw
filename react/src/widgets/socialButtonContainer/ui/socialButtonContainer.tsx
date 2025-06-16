import React from 'react';
import './socialButtonContainer.css';
import { SocialButton } from '../../../features/socialButton';

export function SocialButtonContainer(): React.ReactElement {
	return (
		<section className="social-container">
			<SocialButton src={'../../../../images/vk.png'} />
			<SocialButton src={'../../../../images/yandex.png'} />
			<SocialButton src={'../../../../images/google.png'} />
		</section>
	);
}
