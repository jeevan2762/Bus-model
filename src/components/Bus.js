import { React } from 'react';
import BusBody from './BusBody';
import FrontAndBackDoor from './FrontAndBackDoor';
import FrontMirror from './FrontMirror';
import Lights from './Lights';
import LuggageSection from './LuggageSec';
import Road from './Road';
import Wheels from './Wheels';
import Windows from './Windows';

const Bus = (context) =>
	<div>
		<Road/>
		<BusBody { ...context }/>
		<Windows/>
		<FrontAndBackDoor/>
		<Wheels/>
		<FrontMirror/>
		<LuggageSection/>
		<Lights/>
	</div>;

export default Bus;
