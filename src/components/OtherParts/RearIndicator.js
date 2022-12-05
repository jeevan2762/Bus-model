import { React } from 'react';

const RearIndicator = (context) => {
	const { config: { rearIndicator: { top, left, height, width }}} = context;

	return (
		<div
			className="rearIndicator"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
			} }
		/>);
};

export default RearIndicator;
