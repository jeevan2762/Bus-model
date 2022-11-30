import { React } from 'react';
import BusBody from './BusBody';
import Doors from './Doors';
import FrontMirror from './FrontMirror';
import Lights from './Lights';
import LuggageSection from './LuggageSec';
import Road from './Road';
import Wheels from './Wheels';
import Windows from './Windows';

const Bus = () =>
	<div>
		<Road/>
		<BusBody/>
		<Windows/>
		<Doors/>
		<Wheels/>
		<FrontMirror/>
		<LuggageSection/>
		<Lights/>
	</div>;

export default Bus;
