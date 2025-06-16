import React from 'react';
import './checkbox.css';

type checkboxProps = {
	label: string;
	id?: string;
};

export function Checkbox({ ...props }: checkboxProps): React.ReactElement {
	return (
		<div className="checkbox-container">
			<input className="input checkbox" type="checkbox" id={props.id} />
			<label className="label" htmlFor={props.id} id="label-checkbox">
				{props.label}
			</label>
		</div>
	);
}
