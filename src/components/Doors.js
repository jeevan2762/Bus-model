import { React } from 'react';
const doorComponents = [
	'frontDoor',
	'backDoor',
	'frontDoorGlass1',
	'frontDoorGlass2',
	'backDoorGlass1',
	'backDoorGlass2',
];

const Doors = () =>
	doorComponents.map((door, key) =>
		<div key={ key } className={ `${ door }` }/>);

export default Doors;
