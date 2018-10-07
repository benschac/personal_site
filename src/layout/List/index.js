import React from "react";

/**
 * @class List
 */
function List({
	content,
	selected,
	fontSize,
	header
}) {
	return (
		<section className="flex items-center">
			<h1 className={selected ? "h1" : fontSize}>{header}</h1>
			<ul>
				{
					content.map(item => {
						return <li key={item} className="h3">{item}</li>;
					})
				}
			</ul>
		</section>
	);
}

export default List;