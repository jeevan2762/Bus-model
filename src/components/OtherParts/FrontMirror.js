import { React } from 'react';

const FrontMirror = (context) => {
	const { dimensions:	{ frontGlass:
		{ top, left, height, width, borderTopLeftRadius, border }}} = context;

	return (
		<div
			className="frontGlass"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				height: `${ height }px`,
				width: `${ width }px`,
				borderTopLeftRadius: `${ borderTopLeftRadius }px`,
				border: `${ border }px solid black`,

			} }
		/>);
};

export default FrontMirror;
