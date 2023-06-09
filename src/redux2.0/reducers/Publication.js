import { createSlice } from '@reduxjs/toolkit'

const publication = createSlice({
  name: 'publication',
  initialState: {
    publications: [],
    filteredPublications: [],
    detailPublication: {},
  },
  reducers: {
    setPublications: (state, action) => {
      state.publications = action.payload
    },
    setDetailPublication: (state, action) => {
      state.detailPublication = action.payload
    },
    setFilteredPublications: (state, action) => {
      state.filteredPublications = action.payload
    },
  },
})

export const publicationRs = publication.reducer
export const { setPublications, setDetailPublication, setPublicationPage, setFilteredPublications } =
  publication.actions
