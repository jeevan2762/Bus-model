import { React } from 'react';

const RearIndicator = (context) => {
	const { dimensions: { rearIndicator:
		{ top, left, height, width, border }}} = context;

	return (
		<div
			className="rearIndicator"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default RearIndicator;
