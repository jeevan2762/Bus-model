import { React } from 'react';

const WindowStyle = ({ size, left, top, width }) =>
	<div
		style={ {
			width: `${ width }px`,
			height: `${ size }px`,
			position: 'absolute',
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className="window"
	/>;

export default WindowStyle;
