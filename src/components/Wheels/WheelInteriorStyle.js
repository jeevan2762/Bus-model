import { React } from 'react';

const WheelInteriorStyle = ({ data }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ data.left }px`,
			top: `${ data.top }px`,
			height: `${ data.height }px`,
			width: `${ data.width }px`,
			borderRadius: `${ data.borderRadius }px`,
		} }
		className="WheelInterior"
	/>;

export default WheelInteriorStyle;
