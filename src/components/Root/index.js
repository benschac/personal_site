import React from "react";
import Navigation from "../Navigation";
import App from "../App";
import "./index.css";

/**
 * The Root Component
 * 
 * @class Root
 */
function Root() {
	return (
		<div>
			<Navigation />
			<App />
		</div>
	);
}

export default Root;