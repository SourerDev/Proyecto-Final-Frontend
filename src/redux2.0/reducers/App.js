import { createSlice } from '@reduxjs/toolkit'

const app = createSlice({
  name: 'app',
  initialState: {
    page: 0,
  },
  reducers: {
    setPage: function (state, action) {
      state.page = action.payload
    },
  },
})

export const appRs = app.reducer
export const { setPage } = app.actions
