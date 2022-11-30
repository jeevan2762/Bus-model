import { React } from 'react';

const luggageSectionComponents = [
	'luggageSection',
	'luggageSecHandle',
];

const LuggageSection = () =>
	luggageSectionComponents.map((comp, key) =>
		<div key={ key } className={ `${ comp }` }/>);

export default LuggageSection;
