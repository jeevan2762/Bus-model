import { React } from 'react';
import RightDoorGlassStyle from './RectangularLeftGlass';

const RightDoorGlass = (context) =>
	context.config.rightDoorGlass.map((doorGlass, key) =>
		<RightDoorGlassStyle
			key={ key }
			{ ...{ ...context, data: doorGlass } }
		/>);

export default RightDoorGlass;
