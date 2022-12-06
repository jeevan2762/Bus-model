import { React } from 'react';
import './App.scss';
import BusBody from './components/BusBody';
import getDimensions from './services/getDimensions';

const App = (context) => {
	const { config: { size }} = context;

	return <div className="backGround" role="App">
		<BusBody { ...{ ...context, dimensions: getDimensions(size) } }/>
	</div>;
};

export default App;
