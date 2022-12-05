import { React } from 'react';

const LuggageSectionHandle = (context) => {
	const { config: { luggageSecHandle:
		{ top, left, height, width }}} = context;

	return (
		<div
			className="luggageSecHandle"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
			} }
		/>);
};

export default LuggageSectionHandle;
