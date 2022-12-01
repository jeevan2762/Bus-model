import { React } from 'react';

const RightDoorGlassStyle = ({ left }) =>
	<div
		style={ {

			position: 'absolute',
			left: `${ left }px`,

		} }
		className="doorGlass"
	/>;

export default RightDoorGlassStyle;
