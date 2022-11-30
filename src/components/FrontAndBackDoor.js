import { range } from '@laufire/utils/collection';
import { React } from 'react';
import DoorStyle from './FrontAndBackDoorStyles';

const noOfDoors = 2;
const multiplier = 690;
const margin = 410;

const doors =	range(0, noOfDoors).map((door) => ({
	size: 180,
	left: (door * multiplier) + margin,
	top: 310,
}));

const FrontAndBackDoor = () => doors.map((door, key) =>
	<DoorStyle key={ key } { ...door }/>);

export default FrontAndBackDoor;
