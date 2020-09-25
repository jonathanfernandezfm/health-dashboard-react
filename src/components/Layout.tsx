import React, { ReactNode } from "react";
import { NavBar } from "./NavBar";

import "../styles/Layout.scss";

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="layout">
			<NavBar />
			{children}
		</div>
	);
};
