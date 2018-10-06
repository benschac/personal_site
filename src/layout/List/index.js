import React from "react";


/**
 * @class List
 */
function List({content}) {
	return (
		<ul>
			{
				content.map(item => {
					return <li key={item} className="h3">{item}</li>;
				})
			}
		</ul>
	);
}

export default List;