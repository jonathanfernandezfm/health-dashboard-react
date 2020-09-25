import React, { ReactNode } from "react";

import "../styles/Title.scss";

interface TitleProps {
	size: "l" | "s";
	children: ReactNode;
}

export const Title = ({ size, children }: TitleProps) => {
	return <div className={"title " + size}>{children}</div>;
};
