import React from "react";
import { Header } from "../components/Header";
import { HeartRate } from "../components/main-sections/HeartRate";
import { TodaysActivity } from "../components/main-sections/TodaysActivity";
import { Section } from "../components/section/Section";
import { Title } from "../components/Title";

import "../styles/Activity.scss";

export const Activity = () => {
	return (
		<div className="activity">
			<Header />
			<div className="content">
				<Title size="l">Your Performance</Title>
				<Section title="Today's activity">
					<TodaysActivity />
				</Section>
				<Section title="Health">
					<HeartRate />
				</Section>
			</div>
		</div>
	);
};
