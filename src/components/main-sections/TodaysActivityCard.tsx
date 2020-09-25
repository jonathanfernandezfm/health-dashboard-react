import React, { ReactNode } from "react";

import "../../styles/TodaysActivityCard.scss";

interface TodaysActivityCardProps {
	img: string;
	text: string;
	value: string;
	color: string;
}

export const TodaysActivityCard = ({ img, text, value, color }: TodaysActivityCardProps) => {
	return (
		<div className="todays-card" style={{ backgroundColor: color }}>
			<img className="card-img" src={img} alt="card-image" />
			<div className="card-text">{text}</div>
			<div className="value">{value}</div>
		</div>
	);
};
