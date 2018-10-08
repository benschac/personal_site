import React from "react";
import classnames from "classnames";
import Layout from "../index";
import TwoPanel from "../../layout/TwoPanel"

import {layout, select} from "./index.css";

/**
 * Four Panel Layout
 * 
 * @class FourPanel
 */
class FourPanel extends React.Component {

  state = {
    selected: null
  }

  onSelect = (panel, e) => {
    e.stopPropagation();
    
    this.setState({
      selected: panel
    })
    console.log(panel, this.state.panel);
  }

  onClose = (e) => {
    e.stopPropagation();
    console.log('fired on Close')
    this.setState({
      selected: null
    })
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
            const itemSelected = item.title === this.state.selected;
            const articleCls = classnames({
              'display-none': !itemSelected && this.state.selected !== null,
              [select]: itemSelected
            });
						return (
              <article 
                key={item.title}
                className={articleCls}
                onClick={this.onSelect.bind(null, item.title)}
              >
              {
                this.state.selected
                ? <Layout 
                    type={item.type}
                    onClose={this.onClose}
                    {...item}
                  />
                : (
                  <div className={`
                    ${item.title}
                    flex content-center items-center p2 flex-column`}
                    >
                      {item.icon}
                      <h1 className="h3">{item.title}</h1>
                  </div>
                )
              }
							</article>
						);
					})
				}
			</section>
		);  
	}
}

export default FourPanel;