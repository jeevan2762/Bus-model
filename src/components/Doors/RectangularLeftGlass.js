import { React } from 'react';

const RectangularLeftGlass = ({ left }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ left }px`,
		} }
		className="doorGlass"
	/>;

export default RectangularLeftGlass;
