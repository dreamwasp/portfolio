import { createStore as reduxCreateStore } from "redux"
import { themeObject, lightThemeObject } from "../utils/themes"

const CURRENT_THEME = "CURRENT_THEME"
const TOGGLED = "TOGGLED"

const setCurrentTheme = boolean => {
  if (boolean) {
    return lightThemeObject
  } else {
    return themeObject
  }
}

export const setTheme = boolean => ({
  type: CURRENT_THEME,
  theme: setCurrentTheme(boolean),
})

export const setBoolean = boolean => ({
  type: TOGGLED,
  boolean: boolean,
})

const reducer = (state, action) => {
  let newState = { ...state }
  switch (action.type) {
    case CURRENT_THEME:
      newState.theme = action.theme
      return newState
    case TOGGLED:
      newState.boolean = action.boolean
      return newState
    default:
      return state
  }
}

const initialState = { theme: themeObject, boolean: false }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
