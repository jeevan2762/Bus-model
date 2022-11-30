import { React } from 'react';

const DoorStyle = ({ size, left, top }) =>
	<div
		style={ {
			height: `${ size }px`,
			position: 'absolute',
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className="door"
	/>;

export default DoorStyle;
