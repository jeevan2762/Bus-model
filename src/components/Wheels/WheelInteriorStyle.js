import { React } from 'react';

const WheelInteriorStyle = ({ left }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ left }px`,
		} }
		className="WheelInterior"
	/>;

export default WheelInteriorStyle;
