import { React } from 'react';
import FrontAndBackDoor from './FrontAndBackDoor';
import LeftDoorGlass from './LeftDoorGlass';
import RightDoorGlass from './RightDoorGlass';

const Doors = () =>
	<div>
		<FrontAndBackDoor/>
		<LeftDoorGlass/>
		<RightDoorGlass/>
	</div>;

export default Doors;
