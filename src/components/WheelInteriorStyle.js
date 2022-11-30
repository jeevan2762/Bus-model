import { React } from 'react';

const WheelInteriorStyle = ({ size, left, top }) =>
	<div
		style={ {
			height: `${ size }px`,
			position: 'absolute',
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className="WheelInterior"
	/>;

export default WheelInteriorStyle;
