import React from "react"
import { sundowning } from "../utils/helperFunctions"

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#66858f" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <div className={`react-switch-button`}></div>
        <div className={`emoji`}>🌙 ☀️</div>
      </label>
    </>
  )
}

export default Switch
