import React, { ReactNode } from "react";

import "../../styles/HeartRateSecondaryCard.scss";

interface HeartRateSecondaryCardProps {
	icon: ReactNode;
	value: string;
	label: string;
}

export const HeartRateSecondaryCard = ({ icon, value, label }: HeartRateSecondaryCardProps) => {
	return (
		<div className="heart-rate-second-card">
			<div className="icon">{icon}</div>
			<div className="info-container">
				<div className="value">{value}</div>
				<div className="label">{label}</div>
			</div>
		</div>
	);
};
