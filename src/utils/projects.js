import hanky from "../../static/hanky.png"
import amazon from "../../static/amazon.png"
import slimeGen from "../../static/slimeGen.png"

import gitHub from "../../static/github.svg"
import pawprint from "../../static/pawprint.svg"
import youtube from "../../static/youtube.svg"
import cart from "../../static/cart.svg"

import genText from "../styles/genText.module.css"

const projObject = [
  {
    title: "Where's Doggo?",
    description: `a dog-scouting social network game in which users
          compete for the highest score by collecting the most doggos. add
          friends, check out the global leaderboard, and find rare breeds using
          the map and insights sections.`,
    tech: "built with node.js, react-native, + firestore.",
    links: [
      {
        icon: gitHub,
        link: "https://github.com/return-JSON/wheres-doggo",
        id: "github",
        desc: "repo'd on github",
      },
      {
        icon: pawprint,
        link: "http://expo.io/@cpascale43/wheresdoggo",
        id: "expo",
        desc: "live on expo",
      },
      {
        icon: youtube,
        link:
          "https://www.youtube.com/watch?v=jEXQXNjvmns&list=PLx0iOsdUOUmk6YoAw7y5AbHeXf45tuNnF&index=13&t=0s",
        id: "youtube",
        desc: "presentation on youtube",
      },
    ],
    photo: hanky,
    photoClass: genText.vPhoto,
  },
  {
    title: "strikethru",
    description:
      "a Google Chrome plug-in that aggregates news data to help consumers make conscious buying decisions. allows the user to track whatever issues are pertinent to them across multiple websites and even synced across browsers.",
    tech: "built with node.js, axios, + react.",
    links: [
      {
        icon: gitHub,
        link: "https://github.com/dreamwasp/strikethru",
        id: "github",
        desc: "repo'd on github",
      },
    ],
    photo: amazon,
    photoClass: genText.vPhoto,
  },
  {
    title: "Slime Generation",
    description:
      "an e-commerce platform designed to sell a variety of slimes featuring a RESTful backend using Express and Sequelize, a product catalog, persistent user + guest sessions, and an integrated checkout process. ",
    tech:
      "built with node.js, postgres, sequelize, express, axios, react, + redux.",
    links: [
      {
        icon: gitHub,
        link: "https://github.com/A-BST-Grows-In-Brooklyn/graceShopper",
        id: "github",
        desc: "repo'd on github",
      },
      {
        icon: cart,
        link: "https://slime-generation.herokuapp.com/",
        id: "heroku",
        desc: "live on heroku",
      },
    ],
    photo: slimeGen,
    photoClass: genText.vPhoto,
  },
]

export default projObject
