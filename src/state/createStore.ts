import { createStore as reduxCreateStore, AnyAction, Action, Reducer } from "redux"
import { themeObject, lightThemeObject } from "../utils/themes"

const CURRENT_THEME = "CURRENT_THEME"
const TOGGLED = "TOGGLED"

const setCurrentTheme = (boolean: boolean) => {
  if (boolean) {
    return lightThemeObject
  } else {
    return themeObject
  }
}

export const setTheme = (boolean: boolean) => ({
  type: CURRENT_THEME,
  theme: setCurrentTheme(boolean),
})

export const setBoolean = (boolean: boolean) => ({
  type: TOGGLED,
  boolean: boolean,
})

const reducer: Reducer<State, Action> = (state, action:AnyAction) => {
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

export type RootState = ReturnType<typeof reducer>

export default createStore
