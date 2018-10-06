import React from "react";
import Tile from "../Tile";
import topics from "./meta";
import Layout from "../../layout";
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
			selected: tile === this.state.tile ? null : tile
		})
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
								classnames={`${classname}${
									classname === this.state.selected 
										? ` ${classnames['selected']}` 
										: ''}`
								}
								onClick={this.onClick}
								selected={classname === this.state.selected}
								content={topic.content}
							>
							{
								classname === this.state.selected
									? <Layout content={topic.content} type={topic.type}/>
									: null
							}
							</Tile>
						);
					})
				}
			</main>
		);
	}
}

export default App;