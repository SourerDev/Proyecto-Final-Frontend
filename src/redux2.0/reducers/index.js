import { setPublications, setDetailPublication } from './Publication.js'
import { setUser, setSignIn } from './User.js'
import { setPage, setFilters, resetFilters } from './App.js'
import { setCities } from './City.js'

export { publicationRs } from './Publication.js'
export { userRs } from './User.js'
export { appRs } from './App.js'
export { cityRs } from './City.js'

export const actionsPublications = {
  setPublications,
  setDetailPublication,
}

export const actionsUser = {
  setUser,
  setSignIn,
}

export const actionsApp = {
  setPage,
  setFilters,
  resetFilters,
}

export const actionsCity = {
  setCities,
}
