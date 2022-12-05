import { React } from 'react';

const RectangularLeftGlass = ({ data }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ data.left }px`,
			top: `${ data.top }px`,
			height: `${ data.height }px`,
			width: `${ data.width }px`,
		} }
		className="doorGlass"
	/>;

export default RectangularLeftGlass;
