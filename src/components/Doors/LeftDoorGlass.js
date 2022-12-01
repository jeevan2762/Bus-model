import { range } from '@laufire/utils/collection';
import { React } from 'react';
import RectangularLeftGlass from './RectangularLeftGlass';

const noOfDoorGlasses = 2;
const multiplier = 690;
const margin = 418;

const doorGlasses =	range(0, noOfDoorGlasses).map((doorGlass) => ({
	left: (doorGlass * multiplier) + margin,
}));

const LeftDoorGlass = () => doorGlasses.map((doorGlass, key) =>
	<RectangularLeftGlass key={ key } { ...doorGlass }/>);

export default LeftDoorGlass;
