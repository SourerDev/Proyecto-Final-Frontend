import { createSlice } from '@reduxjs/toolkit'

const publication = createSlice({
  name: 'publication',
  initialState: {
    publications: [],
    detailPublication: {},
  },
  reducers: {
    setPublications: (state, action) => {
      state.publications = action.payload
    },
    setDetailPublication: (state, action) => {
      state.detailPublication = action.payload
    },
  },
})

export const publicationRs = publication.reducer
export const { setPublications, setDetailPublication, setPublicationPage } =
  publication.actions
