import { React } from 'react';

const RectangularLeftGlass = ({ data }) =>
	<div
		style={ {
			position: 'absolute',
			top: `${ data.top }px`,
			left: `${ data.left }px`,
			height: `${ data.height }px`,
			width: `${ data.width }px`,
			borderRadius: `${ data.borderRadius }px`,
			border: `${ data.border }px solid black`,
		} }
		className="doorGlass"
	/>;

export default RectangularLeftGlass;
