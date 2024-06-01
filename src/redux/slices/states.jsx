import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  backgroundState: false,
  barsState: false,
  searchState: false,
  appealState: false,
  videoSendState: false,
  conditionsState: false,
}

export const counterSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    enableSomeThing: (state, name) => {
      state[name.payload] = true
    },
    disableSomeThing: (state, name) => {
      state[name.payload] = false
    },

    disablEveryThing: (state) => {
      state.backgroundState = false
      state.barsState = false
      state.searchState = false
      state.appealState = false
      state.videoSendState = false
      state.conditionsState = false
    },
  },
})

export const { disablEveryThing, enableSomeThing, disableSomeThing } =
  counterSlice.actions

export default counterSlice.reducer
