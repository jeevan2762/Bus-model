import { React } from 'react';

const windowBorderComp = [
	'windowBorder',
];

const WindowBorder = () =>
	windowBorderComp.map((border, key) =>
		<div key={ key } className={ `${ border }` }/>);

export default WindowBorder;
