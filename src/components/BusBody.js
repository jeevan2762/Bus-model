import { React } from 'react';
import Doors from './Doors/Doors';
import OtherParts from './OtherParts/OtherParts';
import Wheels from './Wheels/Wheels';
import Windows from './Windows/Windows';

const BusBody = ({ config }) =>
	<div className="busBody" style={ { backgroundColor: config.busColor } }>;
		<Windows/>
		<Doors/>
		<Wheels/>
		<OtherParts/>
	</div>;

export default BusBody;
