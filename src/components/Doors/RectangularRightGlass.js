import { React } from 'react';

const RectangularRightGlass = ({ data }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ data.left }px`,
			top: `${ data.top }px`,
			height: `${ data.height }px`,
			width: `${ data.width }px`,
			borderRadius: `${ data.borderRadius }px`,
			border: `${ data.border }px solid black`,
		} }
		className="doorGlass"
	/>;

export default RectangularRightGlass;
