import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import links from "./meta";

Navigation.propTypes = {
	/** the links */
	links: PropTypes.array.isRequired
};

/**
 * @class Navigation Component
 */
function Navigation({
	// links
}) {
	return (
		<Fragment>
			<ul>
				{
					links.map(link => {
						return (
							<li key={link.name}>{link.name}</li>
						);
					})
				}
			</ul>
		</Fragment>
	);
}

export default Navigation;