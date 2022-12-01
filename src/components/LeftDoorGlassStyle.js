import { React } from 'react';

const LeftDoorGlassStyle = ({ size, left, top }) =>
	<div
		style={ {
			height: `${ size }px`,
			position: 'absolute',
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className="leftDoorGlass"
	/>;

export default LeftDoorGlassStyle;
