import React from "react";
import FourPanel from "./FourPanel";
import List from "./List";
import TwoPanel from "./TwoPanel";
/**
 * @class Layout
 */
function Layout({
	type,
	content,
	header,
	left,
	right,
	onClose
}) {
	switch(type) {
	case "fourpanel":
		return <FourPanel content={content} header={header}/>;
	case "twopanel":
		return <TwoPanel left={left} right={right} onClose={onClose} />; 
	default:
		return <List content={content} header={header} onClose={onClose} />;
	}
}

export default Layout;