import { React } from 'react';
import FrontAndBackDoor from './FrontAndBackDoor';
import LeftDoorGlass from './LeftDoorGlass';
import RightDoorGlass from './RightDoorGlass';

const Doors = (context) =>
	<div>
		<FrontAndBackDoor { ...context }/>
		<LeftDoorGlass { ...context }/>
		<RightDoorGlass { ...context }/>
	</div>;

export default Doors;
