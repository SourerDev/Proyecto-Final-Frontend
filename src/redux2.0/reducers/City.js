import { createSlice } from '@reduxjs/toolkit'

const city = createSlice({
  name: 'city',
  initialState: {
    cities: [],
  },
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload
    },
  },
})

export const cityRs = city.reducer
export const { setCities } = city.actions
