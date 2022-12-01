import { range } from '@laufire/utils/collection';
import { React } from 'react';
import WindowStyle from './WindowStyle';

const noOfWindows = 5;
const multiplier = 270;

const windows =	range(1, noOfWindows).map((window) => ({
	left: window * multiplier,
}));
const Windows = () => windows.map((window, key) =>
	<WindowStyle key={ key } { ...window }/>);

export default Windows;
