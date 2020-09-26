import React from "react";
import { HeartRateMainCard } from "./HeartRateMainCard";
import { HeartRateSecondaryCard } from "./HeartRateSecondaryCard";
import { VscSymbolMisc } from "react-icons/vsc";

import "../../styles/HeartRate.scss";

export const HeartRate = () => {
	return (
		<div className="heart-rate">
			<HeartRateMainCard />
			<div className="second-cards">
				<HeartRateSecondaryCard icon={<VscSymbolMisc />} value="74" label="BPM per week" />
				<HeartRateSecondaryCard icon={<VscSymbolMisc />} value="60-80" label="Normal BPM" />
			</div>
		</div>
	);
};
