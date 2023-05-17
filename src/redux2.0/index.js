import { configureStore } from "@reduxjs/toolkit";

import { publicationRs, userRs } from "./reducers";

const store = configureStore({
  reducer: {
    publication: publicationRs,
    user: userRs
  },
});

export default store;