import { React } from 'react';

const wheelComponents = [
	'frontWheel',
	'frontWheelInterior',
	'backWheel',
	'backWheelInterior',
];

const Wheels = () =>
	wheelComponents.map((wheel, key) =>
		<div key={ key } className={ `${ wheel }` }/>);

export default Wheels;
