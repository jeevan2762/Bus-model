import { React } from 'react';

const RectangularDoor = ({ left }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ left }px`,
		} }
		className="door"
	/>;

export default RectangularDoor;
