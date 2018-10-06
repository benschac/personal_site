import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWrench, faBook, faGlasses } from "@fortawesome/free-solid-svg-icons";

export default [
	{
		classnames: "ondemand",
		header: "on demand"
	},
	{
		classnames: "frontend",
		type: "fourpanel",
		header: "frontend",
		content: [
			{
				title: "work",
				icon: <FontAwesomeIcon icon={faCode}/>
			},
			{
				title: "tooling",
				icon: <FontAwesomeIcon icon={faWrench}/>
			},
			{
				title: "resources",
				icon: <FontAwesomeIcon icon={faBook}/>
			},
			{
				title: "interests",
				icon: <FontAwesomeIcon icon={faGlasses}/>
			}
		]
	},
	{
		classnames: "projectmanagement",
		header: "project management"
	},
	{
		classnames: "newyears",
		header: "new years",
		type: "list",
		content: [
			"2019 -> speak spanish",
			"2018 -> crossfit 3x weekly",
			"2017 -> software engineer",
			"2016 -> run 500 miles",
		]
	},
	{
		classnames: "blogging",
		header: "blogging"
	},
	{
		classnames: "name",
		fontSize: "h1",
		header: "benjamin schachter",
		content: [
			"human",
			"friend",
			"nyc-based",
			"recurse alumni",
			"ice cream junkie",
			"will pet your dog",
		]
	},
	{
		classnames: "sideprojects",
		header: "side projects"
	},
	{
		classnames: "meaning",
		header: "meaning"
	},
	{
		classnames: "chat",
		header: "lets chat"
	},
	{
		classnames: "fun",
		header: "fun"
	}
];