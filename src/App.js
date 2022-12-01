import { React } from 'react';
import './App.scss';
import BusBody from './components/BusBody';

const App = (context) =>
	<div className="backGround" role="App">
		<BusBody{ ...context }/>
	</div>;

export default App;
