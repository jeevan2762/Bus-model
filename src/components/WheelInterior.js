import { range } from '@laufire/utils/collection';
import { React } from 'react';
import WheelInteriorStyle from './WheelInteriorStyle';

const noOfWheelInteriors = 3;
const multiplier = 695;
const margin = 245;
const wheelInteriors =	range(0, noOfWheelInteriors).map((wheelInterior) => ({
	size: 100,
	left: (wheelInterior * multiplier) + margin,
	top: 440,
}));
const Wheels = () => wheelInteriors.map((wheel, key) =>
	<WheelInteriorStyle key={ key } { ...wheel }/>);

export default Wheels;
