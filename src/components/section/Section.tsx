import React, { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

import "../../styles/Section.scss";

interface SectionProps {
	children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
	return (
		<div className="section">
			<SectionHeader>Today's activity</SectionHeader>
			{children}
		</div>
	);
};
