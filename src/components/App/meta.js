import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeadphonesAlt, faCookieBite, faWrench, faBook, faGlasses, faUtensils, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export default [
	{
		classnames: "ondemand",
		header: "on demand",
		type: "list",
		content: [
			"Engineering Time",
			"15 minute increments",
			"Book Now!"
		]
	},
	{
		classnames: "frontend",
		type: "fourpanel",
		header: "frontend",
		content: [
			{
				title: "work",
				icon: <FontAwesomeIcon icon={faCode} size="2x"/>,
				type: "twopanel",
				left: {
					header: "Dexter",
					list: [
						"platforms configuration panel",
						"first-time user tutorial",
						"refactor: ES6, CSS Modules, Redux and React 16",
						"bug fixes",
						"updated command center UI",
						"generic components to repurpose",
						"collaborate with backend-end, product + design"
					]
				},
				right: {
					header: "Rose Digital",
					list: [
						<a key="roar" href="https://hearmyroarnow.org/">hear me roar</a>,

					]
				}
			},
			{
				title: "tooling",
				icon: <FontAwesomeIcon icon={faWrench} size="2x"/>
			},
			{
				title: "resources",
				icon: <FontAwesomeIcon icon={faBook} size="2x"/>
			},
			{
				title: "interests",
				icon: <FontAwesomeIcon icon={faGlasses} size="2x"/>
			}
		]
	},
	{
		classnames: "projectmanagement",
		header: "project management",
		type: "list",
		content: [
			"Warner Bros Digital Labs",
			"Avatar New York",
			"Hacknocraft",
			"Blue State Digital"
		]
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
		header: "blogging",
		content: [
			"get the rss feed at some point"
		]
	},
	{
		classnames: "name",
		fontSize: "h1",
		header: "benjamin schachter",
		type: "list",
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
		header: "side projects",
		content: [
			"getSwol",
			"menuw"
		]
	},
	{
		classnames: "meaning",
		header: "meaning",
		type: "list",
		content: [
			"freeCodeCamp",
			"facial paralysis",
			"Rebecca purple",
			"NYFD burn victims"
		]
	},
	{
		classnames: "chat",
		header: "lets chat",
		content: [
			"github",
			"linkedin",
			"email",
		]
	},
	{
		classnames: "fun",
		header: "fun",
		type: "fourpanel",
		content: [
			{
				title: "eats",
				icon: <FontAwesomeIcon icon={faUtensils} size="2x"/>
			},
			{
				title: "places",
				icon: <FontAwesomeIcon icon={faMapMarkedAlt} size="2x"/>
			},
			{
				title: "tunes",
				icon: <FontAwesomeIcon icon={faHeadphonesAlt} size="2x"/>
			},
			{
				title: "sweets",
				icon: <FontAwesomeIcon icon={faCookieBite} size="2x"/>
			}
		]
	}
];