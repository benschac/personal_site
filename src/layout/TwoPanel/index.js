import React from "react";
import {layout} from "./index.css";
/**
 * @class TwoPanel
 */
function TwoPanel({
	left, right
}) {
	// debugger;
	return (
		<section className={layout}>
			<article className="mt1">
				{left.header}
				<ul>
					{
						left.list.map(item => {
							return <li className="mb1" key={item}>{item}</li>;
						})
					}
				</ul>
			</article>
			<article className="mt1">
				{right.header}
				<ul>
					{
						right.list.map(item => {
							return <li key={item}>{item}</li>;
						})
					}
				</ul>
			</article>
		</section>
	);
}

export default TwoPanel;