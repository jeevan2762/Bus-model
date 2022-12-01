import { React } from 'react';
import BusBody from './BusBody';
import Doors from './Doors/Doors';
import FrontMirror from './FrontMirror';
import Lights from './Lights';
import LuggageSection from './LuggageSec';
import Wheels from './Wheels';
import Windows from './Windows';

const Bus = (context) =>
	<div>
		<BusBody { ...context }/>
		<Windows/>
		<Doors/>
		<Wheels/>
		<FrontMirror/>
		<LuggageSection/>
		<Lights/>
	</div>;

export default Bus;
