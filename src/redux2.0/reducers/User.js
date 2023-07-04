import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: {
    session: {},
    signIn: false,
    saveds: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.session = action.payload
      state.signIn = true
    },
    setSignIn: (state, action) => {
      state.signIn = action.payload
    },
    setSaveds: (state, action) => {
      state.saveds = action.payload
    }
  },
})

export const userRs = user.reducer
export const { setUser, setSignIn, setSaveds } = user.actions
