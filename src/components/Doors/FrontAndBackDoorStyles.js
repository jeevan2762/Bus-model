import { React } from 'react';

const DoorStyle = ({ left }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ left }px`,
		} }
		className="door"
	/>;

export default DoorStyle;
