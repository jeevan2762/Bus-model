import { React } from 'react';
import WheelInteriorStyle from './WheelInteriorStyle';

const WheelInterior = (context) =>
	context.config.wheelInterior.map((wheel, key) =>
		<WheelInteriorStyle
			key={ key }
			{ ...{ ...context, data: wheel } }
		/>);

export default WheelInterior;
