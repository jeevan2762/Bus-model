import { React } from 'react';

const LeftDoorGlassStyle = ({ left }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ left }px`,
		} }
		className="doorGlass"
	/>;

export default LeftDoorGlassStyle;
