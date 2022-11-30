import { React } from 'react';

const lightComponents = [
	'redLights',
	'rearIndicator',
];

const Lights = () =>
	lightComponents.map((comp, key) =>
		<div key={ key } className={ `${ comp }` }/>);

export default Lights;
