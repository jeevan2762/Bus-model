import { React } from 'react';

const WheelStyle = ({ data }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ data.left }px`,
			top: `${ data.top }px`,
			height: `${ data.height }px`,
			width: `${ data.width }px`,
			borderRadius: `${ data.borderRadius }px`,
		} }
		className="wheelExterior"
	/>;

export default WheelStyle;
