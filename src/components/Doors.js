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

// change this filename to door frames  var name doors => doorframes  fdoorframe, bdoor frame put in sep door.js
// change to frames and bring glasses here
