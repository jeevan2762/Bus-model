import { range } from '@laufire/utils/collection';
import { React } from 'react';
import WindowStyle from './WindowStyle';

const noOfWindows = 5;
const multiplier = 280;

const windows =	range(1, noOfWindows).map((window) => ({
	size: 100,
	left: window * multiplier,
	top: 170,
}));
const Windows = () => windows.map((window, key) =>
	<WindowStyle key={ key } { ...window }/>);

export default Windows;
