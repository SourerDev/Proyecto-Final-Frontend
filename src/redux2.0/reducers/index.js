import { setPublications, setDetailPublication, setFilteredPublications } from './Publication.js'
import { setUser, setSignIn } from './User.js'
import { setPage, setFilters, resetFilters, setViewNav } from './App.js'
import { setCities } from './City.js'

export { publicationRs } from './Publication.js'
export { userRs } from './User.js'
export { appRs } from './App.js'
export { cityRs } from './City.js'

export const actionsPublications = {
  setPublications,
  setDetailPublication,
  setFilteredPublications,
}

export const actionsUser = {
  setUser,
  setSignIn,
}

export const actionsApp = {
  setPage,
  setFilters,
  resetFilters,
  setViewNav,
}

export const actionsCity = {
  setCities,
}
