import { React } from 'react';

const FrontMirror = (context) => {
	const { config: { frontGlass: { top, left, height, width }}} = context;

	return (
		<div
			className="frontGlass"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
			} }
		/>);
};

export default FrontMirror;
