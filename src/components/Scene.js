import { React } from 'react';

const SceneryComponents = [
	'road',
	'roadMidLine',
	'roadSideLines',
];

const Scene = () =>
	SceneryComponents.map((comp, key) =>
		<div key={ key } className={ `${ comp }` }/>);

export default Scene;
