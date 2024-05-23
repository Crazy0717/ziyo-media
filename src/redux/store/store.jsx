import { configureStore } from "@reduxjs/toolkit"
import states from "../slices/states"

export const store = configureStore({
  reducer: {
    states: states,
  },
})
