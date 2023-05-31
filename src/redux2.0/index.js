import { configureStore } from '@reduxjs/toolkit'

import { appRs, publicationRs, userRs, cityRs } from './reducers'

const store = configureStore({
  reducer: {
    publication: publicationRs,
    user: userRs,
    app: appRs,
    city: cityRs,
  },
})

export default store
