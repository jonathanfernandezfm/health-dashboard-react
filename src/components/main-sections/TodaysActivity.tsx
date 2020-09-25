import React from "react";
import { TodaysActivityCard } from "./TodaysActivityCard";

import Stairs from "../../assets/stairs.PNG";
import Calendar from "../../assets/calendar.PNG";
import Shoes from "../../assets/shoes.PNG";

import "../../styles/TodaysActivity.scss";

export const TodaysActivity = () => {
	return (
		<div className="todays-activity">
			<TodaysActivityCard
				img={Stairs}
				text="Overflights completed"
				value="1st floor"
				color="#f4f2ff"
			/>
			<TodaysActivityCard
				img={Calendar}
				text="Steps per week"
				value="54000"
				color="#fff2ec"
			/>
			<TodaysActivityCard
				img={Shoes}
				text="Walking and running distance"
				value="12 miles"
				color="#ecfbff"
			/>
		</div>
	);
};
