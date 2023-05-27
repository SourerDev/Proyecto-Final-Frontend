import { createSlice } from '@reduxjs/toolkit'

const publication = createSlice({
  name: 'publication',
  initialState: {
    publications: [],
    page: 0,
    leakedPublications: [],
    detailPublication: {},
  },
  reducers: {
    setPublications: (state, action) => {
      state.publications = action.payload
    },
    setDetailPublication: (state, action) => {
      state.detailPublication = action.payload
    },
    setPublicationPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const publicationRs = publication.reducer
export const { setPublications, setDetailPublication, setPublicationPage } =
  publication.actions
