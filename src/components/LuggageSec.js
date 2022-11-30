import { React } from 'react';

const luggageSecComponents = [
	'luggageSection',
	'luggageSecHandle',
];

const LuggageSec = () =>
	luggageSecComponents.map((comp, key) =>
		<div key={ key } className={ `${ comp }` }/>);

export default LuggageSec;
