import { React } from 'react';
import FrontMirror from './FrontMirror';
import RedLights from './RedLights';
import RearIndicator from './RearIndicator';
import LuggageSection from './LuggageSection';
import LuggageSectionHandle from './LuggageSectionHandle';

const OtherParts = () =>
	<div>
		<FrontMirror/>
		<RedLights/>
		<RearIndicator/>
		<LuggageSection/>
		<LuggageSectionHandle/>
	</div>;

export default OtherParts;
