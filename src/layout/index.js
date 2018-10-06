import React from "react";
import FourPanel from "./FourPanel";
import List from "./List";

/**
 * @class Layout
 */
function Layout({type, content}) {
	switch(type) {
	case "fourpanel":
		return <FourPanel content={content} />;
	default:
		return <List content={content}/>;
	}
}

export default Layout;