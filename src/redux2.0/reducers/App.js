import { createSlice } from '@reduxjs/toolkit'

const initialFilters = {
  byPublication: {
    modality: ''
  },
  byProperty: {
    type: ''
  },
  byCity: {
    idCity: null,
    string: '',
  },
}

const app = createSlice({
  name: 'app',
  initialState: {
    page: 0,
    filters: initialFilters,
  },
  reducers: {
    setPage: function (state, action) {
      state.page = action.payload
    },
    setFilters: function (state, action) {
      state.filters = { ...state.filters, ...action.payload }
    },
    resetFilters: function (state) {
      state.filters = initialFilters
    },
  },
})

export const appRs = app.reducer
export const { setPage, setFilters, resetFilters } = app.actions
