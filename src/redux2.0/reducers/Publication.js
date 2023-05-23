import {createSlice} from "@reduxjs/toolkit";

const publication = createSlice({
    name: "publication",
    initialState:{
        publications:[],
        leakedPublications: [],
        detailPublication:{}
    },
    reducers:{
        setPublications: (state, action) =>{
            state.publications = action.payload
        }
    }
})

export const publicationRs = publication.reducer
export const {setPublications} = publication.actions 