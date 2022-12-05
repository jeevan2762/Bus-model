import { React } from 'react';

const LuggageSection = (context) => {
	const { config: { luggageSection: { top, left, height, width }}} = context;

	return (
		<div
			className="luggageSection"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
			} }
		/>);
};

export default LuggageSection;
