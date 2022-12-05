import { React } from 'react';
import WheelStyle from './WheelStyle';

const WheelExterior = (context) =>
	context.config.wheelExterior.map((wheel, key) =>
		<WheelStyle
			key={ key }
			{ ...{ ...context, data: wheel } }
		/>);

export default WheelExterior;
