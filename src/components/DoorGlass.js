import { React } from 'react';

const doorGlassComponents = [
	'frontDoorGlass1',
	'frontDoorGlass2',
	'backDoorGlass1',
	'backDoorGlass2',
];

const DoorGlass = () =>
	doorGlassComponents.map((glass, key) =>
		<div key={ key } className={ `${ glass }` }/>);

export default DoorGlass;
