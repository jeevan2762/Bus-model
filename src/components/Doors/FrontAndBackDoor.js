import { React } from 'react';
import RectangularDoor from './RectangularDoor';

const FrontAndBackDoor = (context) => context.config.doors.map((door, key) =>
	<RectangularDoor key={ key } { ...{ ...context, data: door } }/>);

export default FrontAndBackDoor;
