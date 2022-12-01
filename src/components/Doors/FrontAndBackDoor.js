import { range } from '@laufire/utils/collection';
import { React } from 'react';
import RectangularDoor from './RectangularDoor';

const noOfDoors = 2;
const multiplier = 690;
const margin = 250;

const doors =	range(0, noOfDoors).map((door) => ({
	left: (door * multiplier) + margin,
}));

const FrontAndBackDoor = () => doors.map((door, key) =>
	<RectangularDoor key={ key } { ...door }/>);

export default FrontAndBackDoor;
