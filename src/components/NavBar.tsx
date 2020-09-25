import React, { useState } from "react";
import { BiRun } from "react-icons/bi";
import { FaWeight } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import { GiShinyApple } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { GiSpeaker } from "react-icons/gi";
import { IoMdMoon } from "react-icons/io";

import GirlRunnig from "../assets/girl-running.PNG";

import "../styles/NavBar.scss";

interface NavBarProps {}

const NavBarButtons = [
	{ icon: <BiRun />, label: "Activity" },
	{ icon: <FaWeight />, label: "Body" },
	{ icon: <RiStackLine />, label: "Features" },
	{ icon: <GiShinyApple />, label: "Diet" },
	{ icon: <IoMdHeart />, label: "Heart" },
	{ icon: <GiSpeaker />, label: "Hearing" },
	{ icon: <IoMdMoon />, label: "Sleep" },
];

export const NavBar = ({}: NavBarProps) => {
	const [active, setactive] = useState(0);

	return (
		<div className="navbar">
			<div className="logo-container">
				<div className="logo-icon"></div>
				<div className="logo-text">Bequt</div>
			</div>
			<div className="navbar-buttons-container">
				{NavBarButtons.map((button, index) => {
					return (
						<div
							key={index}
							className={"button-container " + (active === index ? "active" : "")}
							onClick={() => {
								setactive(index);
							}}
						>
							<div className="icon">{button.icon}</div>
							<div className="label">{button.label}</div>
						</div>
					);
				})}
			</div>
			<div className="bottom-info">
				<img className="bottom-img" src={GirlRunnig} alt="girl-runing" />
				<div className="img-text">
					You can change <br />
					the dashboard settings
				</div>
				<button className="button-settings">Settings</button>
			</div>
		</div>
	);
};
