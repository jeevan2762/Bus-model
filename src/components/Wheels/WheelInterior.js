import { React } from 'react';
import WheelInteriorStyle from './WheelInteriorStyle';

const WheelInterior = (context) =>
	context.dimensions.wheelInterior.map((wheel, key) =>
		<WheelInteriorStyle
			key={ key }
			{ ...{ ...context, data: wheel } }
		/>);

export default WheelInterior;
