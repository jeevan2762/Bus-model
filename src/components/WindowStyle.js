import { React } from 'react';

const WindowStyle = ({ size, left, top }) =>
	<div
		style={ {
			width: `${ size }px`,
			height: `${ size }px`,
			position: 'absolute',
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className="window"
	/>;

export default WindowStyle;
