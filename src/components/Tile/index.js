import React, {Fragment} from "react";
import PropTypes from "prop-types";


Tile.propTypes = {
	/** the classnames */
	classnames: PropTypes.string.isRequired,
	/** FontSize */
	fontSize: PropTypes.string,
	/** The header in the tile */
	header: PropTypes.string,
	/** onClick the click handler */
	onCLick: PropTypes.func.isRequired,
	/** selected */
	selected: PropTypes.bool.isRequired
};

Tile.defaultProps = {
	fontSize: "h2"
};

/**
 * The tile component
 * 
 * @class Tile
 */
function Tile({
	classnames,
	header,
	fontSize,
	onClick,
	selected,
	content,
	children
}) {
	return (
		<article
			className={`${classnames} justify-center items-center flex clickable`}
			onClick={onClick.bind(null, classnames)}
		>
			{
				selected
					? children
					: <h1 className={fontSize}>{header}</h1>
			}
		</article>
	);
}

export default Tile;