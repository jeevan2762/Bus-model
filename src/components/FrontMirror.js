import { React } from 'react';

const frontMirrorComp = [
	'frontGlass',
];

const FrontMirror = () =>
	frontMirrorComp.map((comp, key) =>
		<div key={ key } className={ `${ comp }` }/>);

export default FrontMirror;
