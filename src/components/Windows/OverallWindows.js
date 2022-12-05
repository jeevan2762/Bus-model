import { React } from 'react';
import Windows from './Windows';

const OverallWindows = (context) =>
	<div>
		<Windows { ...context }/>
	</div>;

export default OverallWindows;
