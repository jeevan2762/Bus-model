import { React } from 'react';
import Doors from './Doors/Doors';
import OtherParts from './OtherParts/OtherParts';
import Wheels from './Wheels/Wheels';
import Windows from './Windows/Windows';

const style = (context) => {
	const { dimensions: { busBody:
		{ top, left, height, width,
			borderRadius, border,
			direction, animation, backgroundColor }}} = context;

	return {
		top: `${ top }px`,
		left: `${ left }px`,
		height: `${ height }px`,
		width: `${ width }px`,
		borderTopLeftRadius: `${ borderRadius.topLeft }px`,
		borderTopRightRadius: `${ borderRadius.topRight }px`,
		borderBottomRightRadius: `${ borderRadius.bottomRight }px`,
		borderBottomLeftRadius: `${ borderRadius.bottomLeft }px`,
		border: `${ border }px solid black`,
		transform: `scaleX${ direction }`,
		animation: `${ animation } 20s infinite linear `,
		backgroundColor: backgroundColor,
	};
};

const BusBody = (context) =>
	<div className="busBody" style={ style(context) }>
		<Windows { ...context }/>
		<Doors { ...context }/>
		<Wheels { ...context }/>
		<OtherParts { ...context }/>
	</div>;

export default BusBody;
