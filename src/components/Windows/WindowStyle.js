import { React } from 'react';

const WindowStyle = ({ data }) =>
	<div
		style={
			{
				position: 'absolute',
				left: `${ data.left }px`,
				top: `${ data.top }px`,
				height: `${ data.height }px`,
				width: `${ data.width }px`,
				border: `${ data.border }px solid black`,
				borderRadius: `${ data.borderRadius }px`,
			}
		}
		className="window"
	/>;

export default WindowStyle;
