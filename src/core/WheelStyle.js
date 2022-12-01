import { React } from 'react';

const WheelStyle = ({ size, left, top }) =>
	<div
		style={ {
			height: `${ size }px`,
			position: 'absolute',
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className="frontWheel"
	/>;

export default WheelStyle;
