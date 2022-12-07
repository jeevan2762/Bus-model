import { React } from 'react';

const WheelInteriorStyle = ({ data }) =>
	<div
		style={ {
			position: 'absolute',
			top: `${ data.top }px`,
			left: `${ data.left }px`,
			height: `${ data.height }px`,
			width: `${ data.width }px`,
			borderRadius: `${ data.borderRadius }px`,
		} }
		className="WheelInterior"
	/>;

export default WheelInteriorStyle;
