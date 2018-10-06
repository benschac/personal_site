import React from "react";
import Tile from "../Tile";
import topics from "./meta";
import classnames from "./index.css";
/**
 * @class App
 */
class App extends React.Component {
	state = {
		selected: null
	}

	onClick = (tile) => {
		this.setState({
			selected: tile
		})
		console.log(tile, this.state.selected);
	}

	/** @inheritdoc */
	render() {
		return (
			<main>
				{
					topics.map(topic => {
						const classname = classnames[topic.classnames];
						return (
							<Tile
								key={topic.classnames}
								header={topic.header}
								fontSize={topic.fontSize}
								classnames={`${classname} ${classname === this.state.selected ? ' selected' : ''}`}
								onClick={this.onClick}
							/>
						);
					})
				}
			</main>
		);
	}
}

export default App;