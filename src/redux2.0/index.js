import { configureStore } from '@reduxjs/toolkit'

import { appRs, publicationRs, userRs } from './reducers'

const store = configureStore({
  reducer: {
    publication: publicationRs,
    user: userRs,
    app: appRs,
  },
})

export default store
