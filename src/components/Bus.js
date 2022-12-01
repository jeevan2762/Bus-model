import { React } from 'react';
import BusBody from './BusBody';
import Doors from './Doors/Doors';
import OtherParts from './OtherParts/OtherParts';
import Wheels from './Wheels/Wheels';
import Windows from './Windows/Windows';

const Bus = (context) =>
	<div>
		<BusBody { ...context }/>
		<Windows/>
		<Doors/>
		<Wheels/>
		<OtherParts/>
	</div>;

export default Bus;
