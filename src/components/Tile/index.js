import React from "react";
import PropTypes from "prop-types";

Tile.propTypes = {
	/** the classnames */
	classnames: PropTypes.string.isRequired,
	/** FontSize */
	fontSize: PropTypes.string,
	/** The header in the tile */
	header: PropTypes.string
};

Tile.defaultProps = {
	fontSize: "h2"
};

/**
 * The tile component
 * 
 * @class Tile
 */
function Tile({classnames, header, fontSize, onClick}) {
	return (
		<article
			className={`${classnames} justify-center items-center flex`}
			onClick={onClick.bind(null, classnames)}
		>
			<h1 className={fontSize}>{header}</h1>
		</article>
	);
}

export default Tile;