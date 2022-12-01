import { React } from 'react';

const RectangularRightGlass = ({ left }) =>
	<div
		style={ {

			position: 'absolute',
			left: `${ left }px`,

		} }
		className="doorGlass"
	/>;

export default RectangularRightGlass;
