/* eslint-disable no-magic-numbers */
import { range } from '@laufire/utils/collection';

const noOfWindows = 5;
const multiplier = 230;

const noOfDoors = 2;
const doorMultiplier = 690;
const margin = 300;

const noOfRightDoorGlasses = 2;
const rightGlassMultiplier = 690;
const rightGlassMargin = 365;

const noOfLeftDoorGlasses = 2;
const leftGlassMultiplier = 690;
const leftGlassMargin = 308;

const noOfExteriorWheels = 2;
const wheelExteriorMultiplier = 695;
const wheelExteriorMargin = 125;

const noOfWheelInteriors = 3;
const wheelInteriorMultiplier = 710;
const wheelInteriorMargin = 230;

const busBody = (data) => ({
	top: (150 * data.size) + data.y,
	left: (0 * data.size) + data.x,
	height: 350 * data.size,
	width: 1200 * data.size,
	border: 2 * data.size,
	borderRadius:
	{
		topLeft: 153 * data.size,
		topRight: 5 * data.size,
		bottomRight: 5 * data.size,
		bottomLeft: 15 * data.size,
	},
	animation: data.animation,
	transform: data.transform,
});

const redLights = (data) => ({
	top: 270 * data.size,
	left: 1200 * data.size,
	height: 35 * data.size,
	width: 10 * data.size,
	borderRadius: 2 * data.size,
	border: 1 * data.size,
});

const rearIndicator = (data) => ({
	top: 307 * data.size,
	left: 1200 * data.size,
	height: 35 * data.size,
	width: 10 * data.size,
	border: 1 * data.size,
});

const frontGlass = (data) => ({
	top: 40 * data.size,
	left: 0 * data.size,
	width: 90 * data.size,
	height: 136 * data.size,
	borderTopLeftRadius: 90 * data.size,
	border: 2 * data.size,
});

const luggageSection = (data) => ({
	top: 239 * data.size,
	left: 585 * data.size,
	height: 100 * data.size,
	width: 200 * data.size,
	border: 3 * data.size,
});

const luggageSecHandle = (data) => ({
	top: 318 * data.size,
	left: 666 * data.size,
	height: 10 * data.size,
	width: 50 * data.size,
});

const windows = (data) =>
	range(1, noOfWindows).map((window) => ({
		top: 20 * data.size,
		height: 100 * data.size,
		width: 170 * data.size,
		left: (window * multiplier) * data.size,
		borderRadius: 5 * data.size,
		border: 2 * data.size,
	}));

const doors = (data) =>
	range(0, noOfDoors).map((door) => ({
		top: 156 * data.size,
		left: ((door * doorMultiplier) + margin) * data.size,
		height: 180 * data.size,
		width: 115 * data.size,
		border: 5 * data.size,
	}));

const rightDoorGlass = (data) =>
	range(0, noOfRightDoorGlasses).map((doorGlass) => ({
		left: ((doorGlass * rightGlassMultiplier)
			+ rightGlassMargin) * data.size,
		top: 164 * data.size,
		height: 172 * data.size,
		width: 50 * data.size,
		border: 1 * data.size,
	}));

const leftDoorGlass = (data) =>
	range(0, noOfLeftDoorGlasses).map((doorGlass) => ({
		left: ((doorGlass * leftGlassMultiplier) + leftGlassMargin) * data.size,
		top: 164 * data.size,
		height: 172 * data.size,
		width: 50 * data.size,
		border: 1 * data.size,
	}));

const wheelExterior = (data) =>
	range(0, noOfExteriorWheels).map((wheel) => ({
		left: ((wheel * wheelExteriorMultiplier)
			+ wheelExteriorMargin) * data.size,
		height: 80 * data.size,
		top: 290 * data.size,
		width: 80 * data.size,
		borderRadius: 100 * data.size,
		border: 35 * data.size,
	}));

const wheelInterior = (data) =>
	range(0, noOfWheelInteriors).map((wheelInt) => ({
		left: ((wheelInt * wheelInteriorMultiplier)
			+ wheelInteriorMargin) * data.size,
		height: 70 * data.size,
		top: 440 * data.size,
		width: 37 * data.size,
		borderRadius: 35 * data.size,
		border: 2 * data.size,
	}));

const getDimensions = (data) => ({
	busBody: busBody(data),
	redLights: redLights(data),
	rearIndicator: rearIndicator(data),
	frontGlass: frontGlass(data),
	luggageSection: luggageSection(data),
	luggageSecHandle: luggageSecHandle(data),
	windows: windows(data),
	doors: doors(data),
	rightDoorGlass: rightDoorGlass(data),
	leftDoorGlass: leftDoorGlass(data),
	wheelExterior: wheelExterior(data),
	wheelInterior: wheelInterior(data),
});

export default getDimensions;
