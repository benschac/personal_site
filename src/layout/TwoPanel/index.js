import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {layout, close} from "./index.css";
/**
 * @class TwoPanel
 */
function TwoPanel({
	left, right, onClose, title, item
}) {
	return (
		<section className={layout}>
			<FontAwesomeIcon onClick={onClose} icon={faTimes} size="3x" className={close} />
			<article className="mt1">
				<h1 className="h3">{left.header}</h1>
				<ul>
					{
						left.list.map(item => {
							return <li className="mb1" key={item}>{item}</li>;
						})
					}
				</ul>
			</article>
			<article className="mt1">
				<h1 className="h3">{right.header}</h1>
				<ul>
					{
						right.list.map(item => {
							return <li className="mb1" key={item}>{item}</li>;
						})
					}
				</ul>
			</article>
		</section>
	);
}

export default TwoPanel;