import { range } from '@laufire/utils/collection';
import { React } from 'react';
import WheelStyle from './WheelStyle';

const noOfWheels = 2;
const multiplier = 695;
const margin = 225;

const wheels =	range(0, noOfWheels).map((wheel) => ({
	size: 80,
	left: (wheel * multiplier) + margin,
	top: 440,
}));

const WheelExterior = () => wheels.map((wheel, key) =>
	<WheelStyle key={ key } { ...wheel }/>);

export default WheelExterior;
