import React from 'react';
import './socialButton.css';

type socialBtnProps = {
	src: string;
};

export function SocialButton({ ...props }: socialBtnProps): React.ReactElement {
	return (
		<button className="social-button google-btn">
			<img className="btn-image" src={props.src} />
		</button>
	);
}
