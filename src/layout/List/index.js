import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {close, layout} from "./index.css";


/**
 * @class List
 */
function List({
	content,
	selected,
	fontSize,
	header,
	onClose
}) {
	return (
		<section className={`${layout} flex items-center justify-center relative`}>
			<FontAwesomeIcon onClick={onClose} icon={faTimes} size="3x" className={close} />
			<h1 className={selected ? "h1" : fontSize}>{header}</h1>
			<ul>
				{
					content && content.map(item => {
						return <li key={item} className="h3 mb1">{item}</li>;
					})
				}
			</ul>
		</section>
	);
}

export default List;