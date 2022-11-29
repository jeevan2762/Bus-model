import { React } from 'react';
import BusBody from './BusBody';
import DoorGlass from './DoorGlass';
import Doors from './Doors';
import FrontMirror from './FrontMirror';
import Road from './Road';
import Wheels from './Wheels';
import Windows from './Windows';

// const busComponents = [
// 	'redLights',
// 	'rearIndicator',
// 	'topDesign',
// 	'luggageSecHandle',
// ];

const Bus = () =>
	<div>
		<Road/>
		<BusBody/>
		<Windows/>
		<Doors/>
		<DoorGlass/>
		<Wheels/>
		<FrontMirror/>
	</div>;

export default Bus;
