import React from "react";
import Tile from "../Tile";
import topics from "./meta";
import Layout from "../../layout";

import classnames from "classnames"
import classNames from "./index.css";
/**
 * @class App
 */
class App extends React.Component {
	state = {
		selected: null
	}

	onClick = (tile) => {
		this.setState({
			selected: tile === this.state.tile ? null : tile
		})
	}

	/** @inheritdoc */
	render() {
		return (
			<main>
				{
					topics.map(topic => {
						const tileCls = classnames({
							[classNames[topic.classnames]]: true,
							[classNames['tile']]: true
						});
						
						return (
							<Tile
								key={topic.classnames}
								header={topic.header}
								fontSize={topic.fontSize}
								classnames={`${tileCls}${
									tileCls === this.state.selected 
										? ` ${classNames['selected']}` 
										: ''}`
								}
								selected={tileCls === this.state.selected}
								onClick={this.onClick}
							>						
								<Layout 
										{...topic}
										selected={true}
									/>
							</Tile>
						);
					})
				}
			</main>
		);
	}
}

export default App;