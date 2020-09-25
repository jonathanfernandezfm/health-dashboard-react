import React, { ReactNode } from "react";
import { Title } from "../Title";
import { HiDotsHorizontal } from "react-icons/hi";

import "../../styles/SectionHeader.scss";

interface SectionHeaderProps {
	children: ReactNode;
}

export const SectionHeader = ({ children }: SectionHeaderProps) => {
	return (
		<div className="section-header">
			<Title size="s">{children}</Title>
			<div className="three-dots-button">
				<HiDotsHorizontal />
			</div>
		</div>
	);
};
