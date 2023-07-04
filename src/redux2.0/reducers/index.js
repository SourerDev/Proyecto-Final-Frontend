import { setPublications, setDetailPublication } from './Publication.js'
import { setUser, setSignIn, setSaveds } from './User.js'
import {
  setPage,
  setFilters,
  resetFilters,
  setViewNav,
  setIsLoading,
} from './App.js'
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
  setSaveds,
}

export const actionsApp = {
  setPage,
  setFilters,
  resetFilters,
  setViewNav,
  setIsLoading,
}

export const actionsCity = {
  setCities,
}
