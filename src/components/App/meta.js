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
            "refactor: es6, css modules, react + redux",
            "bug fixes",
            "updated command center UI",
            "generic components to repurpose",
            "collaborate -> backend, product + design"
          ]
        },
        right: {
          header: "Rose Digital",
          list: [
            <a key="roar" href="https://hearmyroarnow.org/">hear me roar</a>,
            "react + redux + scss",
            "card configurator",
            "wall of cards",
            "site wide fixes"
          ]
        }
      },
      {
        title: "tooling",
        icon: <FontAwesomeIcon icon={faWrench} size="2x"/>,
        type: "list",
        content: [
          "react",
          "redux",
          "postcss",
          "es6+",
          "babel",
          "webpack",
          "css variables",
          "jest",
          "css grid",
          "flexbox",
        ]
      },
      {
        title: "resources",
        icon: <FontAwesomeIcon icon={faBook} size="2x"/>,
        type: "list",
        content: [
          "coming soon!"
        ]
      },
      {
        title: "interests",
        icon: <FontAwesomeIcon icon={faGlasses} size="2x"/>,
        type: "list",
        content: [
          "coming soon!"
        ]
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
      <a target="_blank" href="https://medium.com/@benschac">medium</a>
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
      <a target="_blank" href="https://m.me/getSwolBot">getSwol</a>,
      <a target="_blank" href="https://menuw.ai">menuw</a>,
    ]
  },
  {
    classnames: "meaning",
    header: "meaning",
    type: "list",
    content: [
      // "freeCodeCamp",
      // "facial paralysis",
      // "Rebecca purple",
      // "NYFD burn victims",
      "coming soon"
    ]
  },
  {
    classnames: "chat",
    header: "lets chat",
    content: [
      <a key="github" target="_blank" href="https://github.com/benschac">github</a>,
      <a key="linkedin" target="_blank" href="https://linkedin.com/in/benjaminschachter">linkedin</a>,
      <a key="email" target="_blank" href="mailto:benschac@gmail.com">email</a>,
      <a key="resume" target="_blank" href="../../../benjaminschachterresumeforweb.pdf">resume</a>
    ]
  },
  {
    classnames: "fun",
    header: "fun",
    type: "fourpanel",
    content: [
      {
        title: "eats",
        icon: <FontAwesomeIcon icon={faUtensils} size="2x"/>,
        type: "list",
        content: [
          "coming soon!"
        ]
      },
      {
        title: "places",
        icon: <FontAwesomeIcon icon={faMapMarkedAlt} size="2x"/>,
        type: "list",
        content: [
          "coming soon!"
        ]
      },
      {
        title: "tunes",
        icon: <FontAwesomeIcon icon={faHeadphonesAlt} size="2x"/>,
        type: "list",
        content: [
          "coming soon!"
        ]
      },
      {
        title: "sweets",
        icon: <FontAwesomeIcon icon={faCookieBite} size="2x"/>,
        type: "list",
        content: [
          "coming soon!"
        ]
      }
    ]
  }
];