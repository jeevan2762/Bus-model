import { React } from 'react';

const WheelStyle = ({ left }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ left }px`,
		} }
		className="wheelExterior"
	/>;

export default WheelStyle;
