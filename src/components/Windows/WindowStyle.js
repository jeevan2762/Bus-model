import { React } from 'react';

const WindowStyle = ({ data }) =>
	<div
		style={
			{
				top: `${ data.top }px`,
				left: `${ data.left }px`,
				height: `${ data.height }px`,
				width: `${ data.width }px`,
				border: `${ data.border }px solid black`,
				borderRadius: `${ data.borderRadius }px`,
			}
		}
		className="window"
	/>;

export default WindowStyle;
