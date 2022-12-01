import { React } from 'react';

const WindowStyle = ({ left }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ left }px`,
		} }
		className="window"
	/>;

export default WindowStyle;
