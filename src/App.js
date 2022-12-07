import { React } from 'react';
import './App.scss';
import BusBody from './components/BusBody';
import getDimensions from './services/getDimensions';

const App = (context) => {
	const { config } = context;

	return <div className="backGround" role="App">
		{config.buses.map((data, key) =>
			<BusBody
				key={ key }
				{ ...{ ...context, dimensions: getDimensions(data) } }
			/>)}
	</div>;
};

export default App;
