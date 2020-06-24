import React, { useState } from "react"
import { Link } from "gatsby"

import Switch from "./Switch"
import theme from "../utils/themes"

import gitHub from "../icons/github.svg"
import li from "../icons/li.svg"
import email from "../icons/email.svg"

const activeStyle = { color: "#6193bc", borderBottom: "2px solid #6193bc" }

export default () => {
  let headerStyles = theme.header
  const [value, setValue] = useState(false)

  return (
    <h6 className={headerStyles.header}>
      <div className={headerStyles.textContainer}>
        <div className={headerStyles.nameLinks}>
          <h6 className={headerStyles.name}>cassie spain</h6>
          <div className={headerStyles.links}>
            <Link
              className={headerStyles.link}
              activeStyle={activeStyle}
              to="/"
            >
              about
            </Link>
            <Link
              className={headerStyles.link}
              activeStyle={activeStyle}
              to="/work/"
            >
              work
            </Link>
            <Link
              className={headerStyles.link}
              activeStyle={activeStyle}
              to="/contact/"
            >
              contact
            </Link>
          </div>
        </div>
        <div className={headerStyles.logos}>
          <a
            href="https://github.com/dreamwasp"
            target="_blank"
            rel="noopener noreferrer"
            className={headerStyles.logo}
          >
            <img
              src={gitHub}
              className={headerStyles.resize}
              alt="github icon link"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ceaspain/"
            target="_blank"
            rel="noopener noreferrer"
            className={headerStyles.logo}
            alt="linkedIn icon link"
          >
            <img src={li} className={headerStyles.resize} />
          </a>
          <a href="mailto:cea.spain@gmail.com" className={headerStyles.logo}>
            <img
              src={email}
              className={headerStyles.resize}
              alt="email icon link"
            />
          </a>
          <Switch
            isOn={value}
            handleToggle={() => {
              setValue(!value)
            }}
          />
        </div>
      </div>
      <hr className={headerStyles.line}></hr>
    </h6>
  )
}
