import { range } from '@laufire/utils/collection';
import { React } from 'react';
import LeftDoorGlassStyle from './LeftDoorGlassStyle';

const noOfDoorGlasses = 2;
const multiplier = 690;
const margin = 410;

const doorGlasses =	range(0, noOfDoorGlasses).map((doorGlass) => ({
	size: 180,
	left: (doorGlass * multiplier) + margin,
	top: 310,
}));

const LeftDoorGlass = () => doorGlasses.map((doorGlass, key) =>
	<LeftDoorGlassStyle key={ key } { ...doorGlass }/>);

export default LeftDoorGlass;
