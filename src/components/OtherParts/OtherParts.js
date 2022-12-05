import { React } from 'react';
import FrontMirror from './FrontMirror';
import RedLights from './RedLights';
import RearIndicator from './RearIndicator';
import LuggageSection from './LuggageSection';
import LuggageSectionHandle from './LuggageSectionHandle';

const OtherParts = (context) =>
	<div>
		<FrontMirror { ...context }/>
		<RedLights { ...context }/>
		<RearIndicator { ...context }/>
		<LuggageSection { ...context }/>
		<LuggageSectionHandle { ...context }/>
	</div>;

export default OtherParts;
