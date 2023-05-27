import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: {
    session: {},
    signIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.session = action.payload
      state.signIn = true
    },
    setSignIn: (state, action) => {
      state.signIn = action.payload
    },
  },
})

export const userRs = user.reducer
export const { setUser, setSignIn } = user.actions
