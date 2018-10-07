import React from "react";
import FourPanel from "./FourPanel";
import List from "./List";

/**
 * @class Layout
 */
function Layout({
	type,
	content,
	header
}) {
	switch(type) {
	case "fourpanel":
		return <FourPanel content={content} header={header}/>;
	default:
		return <List content={content} header={header}/>;
	}
}

export default Layout;