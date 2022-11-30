import { range } from '@laufire/utils/collection';
import { React } from 'react';
import WheelInteriorStyle from './WheelInteriorStyle';

const noOfWheelInteriors = 3;
const multiplier = 710;
const margin = 230;

const wheelInteriors = range(0, noOfWheelInteriors).map((wheelInterior) => ({
	size: 70,
	left: (wheelInterior * multiplier) + margin,
	top: 440,
}));
const WheelInterior = () => wheelInteriors.map((wheel, key) =>
	<WheelInteriorStyle key={ key } { ...wheel }/>);

export default WheelInterior;
