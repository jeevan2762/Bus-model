import { React } from 'react';

const LuggageSection = (context) => {
	const { dimensions: { luggageSection:
		{ top, left, height, width, border }}} = context;

	return (
		<div
			className="luggageSection"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default LuggageSection;
