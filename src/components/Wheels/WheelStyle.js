import { React } from 'react';

const WheelStyle = ({ data }) =>
	<div
		style={ {
			position: 'absolute',
			top: `${ data.top }px`,
			left: `${ data.left }px`,
			height: `${ data.height }px`,
			width: `${ data.width }px`,
			borderRadius: `${ data.borderRadius }px`,
			border: `${ data.border }px dashed black`,

		} }
		className="wheelExterior"
	/>;

export default WheelStyle;
