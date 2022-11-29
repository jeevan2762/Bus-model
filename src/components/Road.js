import { React } from 'react';

const roadComponents = [
	'road',
	'roadMidLine',
	'roadSideLines',
];

const Road = () =>
	roadComponents.map((comp, key) =>
		<div key={ key } className={ `${ comp }` }/>);

export default Road;
