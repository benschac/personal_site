import React from "react";

/**
 * Four Panel Layout
 * 
 * @class FourPanel
 */
function FourPanel({
	content
}) {
	return (
		<section>
			{
				content.map(item => {
					return (
						<div key={item.title}>
							{item.title} {item.icon}
						</div>
					);
				})
			}
		</section>
	);
}

export default FourPanel;