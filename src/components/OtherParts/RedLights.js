import { React } from 'react';

const RedLights = (context) => {
	const { config:
		{ redLights:
			{ top, left, height, width, borderRadius, border }}} = context;

	return (
		<div
			className="redLights"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
				borderRadius: `${ borderRadius }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default RedLights;
