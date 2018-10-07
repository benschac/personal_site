import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {layout, close} from "./index.css";

/**
 * Four Panel Layout
 * 
 * @class FourPanel
 */
class FourPanel extends React.Component {

  onSelect = (panel) => {
    console.log(panel);
  }
	
	/** @inheritdoc */
	render() {
		const {
			content,
			selected,
			fontSize,
			header
		} = this.props;
		return (
      <section className={layout}>
				<h1 className={selected ? "h1" : fontSize}>{header}</h1>
				{
					content.map(item => {
						return (
              <article 
                key={item.title}
                onClick={this.onSelect.bind(null, item.title)}
              >
								<span>{item.icon}</span>
								<h1 className="h3">{item.title}</h1>
							</article>
						);
					})
				}
			</section>
		);  
	}
}

export default FourPanel;