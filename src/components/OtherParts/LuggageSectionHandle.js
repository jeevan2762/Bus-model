import { React } from 'react';

const LuggageSectionHandle = (context) => {
	const { dimensions: { luggageSecHandle:
		{ top, left, height, width, border }}} = context;

	return (
		<div
			className="luggageSecHandle"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default LuggageSectionHandle;
