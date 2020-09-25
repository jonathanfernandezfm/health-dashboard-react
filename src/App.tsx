import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { Activity } from "./pages/Activity";

function App() {
	return (
		<div className="health-dashboard">
			<Layout>
				<Activity />
			</Layout>
		</div>
	);
}

export default App;
