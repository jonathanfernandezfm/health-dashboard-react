import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { VscBell } from "react-icons/vsc";
import { BsChatSquareDots } from "react-icons/bs";

import "../styles/Header.scss";

export const Header = () => {
	const input = useRef(null);

	const onSearchBarClick = () => {
		input.current.focus();
	};

	return (
		<div className="header">
			<div
				className="search-bar"
				onClick={() => {
					onSearchBarClick();
				}}
			>
				<div className="search-icon">
					<FiSearch />
				</div>
				<input id="search-input" type="text" placeholder="Search..." ref={input} />
			</div>
			<div className="menu-icons-container">
				<div className="messages-icon">
					<BsChatSquareDots />
				</div>
				<div className="notifications-icon">
					<VscBell />
				</div>
				<div className="user-icon">
					<GrUserManager />
				</div>
			</div>
		</div>
	);
};
