import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Line } from "react-chartjs-2";

import "../../styles/HeartRateMainCard.scss";

const chartData = [20, 10, 2, 30, 40];

const data = {
	labels: [
		"3h ago",
		"2h 50 min ago",
		"2h 40 min ago",
		"2h 30 min ago",
		"2h 20 min ago",
		"2h 10 min ago",
		"2h ago",
		"1h 50 min ago",
		"1h 40 min ago",
		"1h 30 min ago",
		"1h 20 min ago",
		"1h 10 min ago",
		"60 min ago",
		"50 min ago",
		"40 min ago",
		"30 min ago",
		"20 min ago",
		"10 min ago",
		"Now",
	],
	datasets: [
		{
			label: "Rate",
			fill: false,
			lineTension: 0,
			backgroundColor: "#ffffff",
			borderColor: "#ffbc95",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "#ffbc95",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "#ffbc95",
			pointHoverBorderColor: "#ff8b48",
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [
				60,
				80,
				75,
				63,
				120,
				180,
				60,
				79,
				60,
				80,
				75,
				63,
				120,
				180,
				60,
				79,
				60,
				80,
				75,
				63,
				120,
				180,
				60,
				79,
			],
		},
	],
};

const options = {
	legend: {
		display: false,
	},
	responsive: true,
	scales: {
		yAxes: [
			{
				ticks: {
					display: false,
				},
				gridLines: {
					drawBorder: false,
					display: false,
				},
			},
		],
		xAxes: [
			{
				ticks: {
					display: false,
				},
				gridLines: {
					drawBorder: false,
					display: false,
				},
			},
		],
	},
};

export const HeartRateMainCard = () => {
	return (
		<div className="heart-rate-main-card">
			<div className="title-graph-container">
				<div className="title-container">
					<div className="heart-icon">
						<AiOutlineHeart />
					</div>
					<div className="heart-title">Heart rate</div>
				</div>
				<div className="graph-heart-rate">
					<Line data={data} options={options} width={350} height={100} />
				</div>
			</div>
			<div className="bpm-today-container">
				<div className="bpm-today">82</div>
				<div className="bpm-today-text">Your BPM today</div>
			</div>
		</div>
	);
};
