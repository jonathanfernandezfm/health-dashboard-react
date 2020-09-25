import React from "react";
import { Header } from "../components/Header";
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
				<Section>
					<TodaysActivity />
				</Section>
			</div>
		</div>
	);
};
