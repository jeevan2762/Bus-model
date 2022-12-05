import { React } from 'react';
import WheelExterior from './WheelExterior';
import WheelInterior from './WheelInterior';

const Wheels = (context) =>
	<div>
		<WheelExterior { ...context }/>
		<WheelInterior { ...context }/>
	</div>;

export default Wheels;
