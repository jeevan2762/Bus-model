import { range } from '@laufire/utils/collection';
import { React } from 'react';
import WheelStyle from './Wheelstyle';

const noOfWheels = 3;
const multiplier = 695;
const margin = 245;
const wheels =	range(0, noOfWheels).map((wheel) => ({
	size: 100,
	left: (wheel * multiplier) + margin,
	top: 440,
}));
const Wheels = () => wheels.map((wheel, key) =>
	<WheelStyle key={ key } { ...wheel }/>);

export default Wheels;
