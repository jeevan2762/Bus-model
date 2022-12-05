import { React } from 'react';

const RedLights = (context) => {
	const { config: { redLights: { top, left, height, width }}} = context;

	return (
		<div
			className="redLights"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
			} }
		/>);
};

export default RedLights;
