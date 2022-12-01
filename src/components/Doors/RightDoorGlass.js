import { range } from '@laufire/utils/collection';
import { React } from 'react';
import RightDoorGlassStyle from './RectangularLeftGlass';

const noOfDoorGlasses = 2;
const multiplier = 690;
const margin = 474;

const doorGlasses =	range(0, noOfDoorGlasses).map((doorGlass) => ({
	left: (doorGlass * multiplier) + margin,
}));

const RightDoorGlass = () => doorGlasses.map((doorGlass, key) =>
	<RightDoorGlassStyle key={ key } { ...doorGlass }/>);

export default RightDoorGlass;
