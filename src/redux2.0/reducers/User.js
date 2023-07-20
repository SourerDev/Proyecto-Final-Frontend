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
    resetUser: (state, action) => {
      state.session = {}
      state.signIn = false
      state.saveds = {}
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
export const { setUser, resetUser, setSignIn, setSaveds } = user.actions
