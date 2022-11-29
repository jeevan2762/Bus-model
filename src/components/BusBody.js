import { React } from 'react';

const busBodyComponents = [
	'busBody',
];

const BusBody = () =>
	busBodyComponents.map((body, key) =>
		<div key={ key } className={ `${ body }` }/>);

export default BusBody;
