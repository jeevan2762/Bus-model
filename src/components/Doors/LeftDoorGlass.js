import { React } from 'react';
import RectangularLeftGlass from './RectangularLeftGlass';

const LeftDoorGlass = (context) =>
	context.config.leftDoorGlass.map((doorGlass, key) =>
		<RectangularLeftGlass
			key={ key }
			{ ...{ ...context, data: doorGlass } }
		/>);

export default LeftDoorGlass;
