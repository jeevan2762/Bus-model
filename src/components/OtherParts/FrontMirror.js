import { React } from 'react';

const FrontMirror = (context) => {
	const { config:	{ frontGlass:
		{ top, left, height, width, borderTopLeftRadius }}} = context;

	return (
		<div
			className="frontGlass"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
				borderTopLeftRadius: `${ borderTopLeftRadius }px`,
			} }
		/>);
};

export default FrontMirror;
