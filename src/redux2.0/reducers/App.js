import { createSlice } from '@reduxjs/toolkit'

const initialFilters = {
  byPublication: {
    modality: '',
    price: '',
  },
  byProperty: {
    type: '',
    bedrooms: '',
    bathrooms: '',
    yearBuilt: '',
    squareMeters: '',
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
    viewNav: true,
    isLoading: false
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
    setViewNav: function (state, action) {
      state.viewNav = action.payload
    },
    setIsLoading: function (state , action){
      state.isLoading = action.payload
    }
  },
})

export const appRs = app.reducer
export const { setPage, setFilters, resetFilters, setViewNav, setIsLoading } = app.actions
