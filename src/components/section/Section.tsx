import React, { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

import "../../styles/Section.scss";

interface SectionProps {
	children: ReactNode;
	title: string;
}

export const Section = ({ children, title }: SectionProps) => {
	return (
		<div className="section">
			<SectionHeader>{title}</SectionHeader>
			{children}
		</div>
	);
};
