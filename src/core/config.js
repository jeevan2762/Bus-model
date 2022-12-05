import { rndValue } from '@laufire/utils/random';
import { range } from '@laufire/utils/collection';

const colors = ['lightgreen', 'lightcoral', 'cornflowerblue', 'wheat'];

const noOfWindows = 5;
const multiplier = 230;

const config = {
	busColor: rndValue(colors),

	busBody: {
		top: 150,
		left: 100,
		height: 350,
		width: 1200,
	},

	redLights: {
		top: 270,
		left: 1200,
		height: 35,
		width: 10,
	},

	rearIndicator: {
		top: 307,
		left: 1200,
		height: 35,
		width: 10,
	},

	frontGlass: {
		top: 40,
		left: 0,
		width: 90,
		height: 136,
	},

	luggageSection: {
		top: 239,
		left: 585,
		height: 100,
		width: 200,
	},

	luggageSecHandle: {
		top: 318,
		left: 666,
		height: 10,
		width: 50,
	},

	windows: range(1, noOfWindows).map((window) => ({
		top: 20,
		height: 100,
		width: 170,
		left: window * multiplier,
	})),

};

export default config;
