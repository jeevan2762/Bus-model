import { React } from 'react';
import WindowStyle from './WindowStyle';

const Windows = (context) => context.dimensions.windows.map((window, key) =>
	<WindowStyle key={ key } { ...{ ...context, data: window } }/>);

export default Windows;
