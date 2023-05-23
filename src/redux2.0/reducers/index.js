import {setPublications} from "./Publication.js"
import { setUser, setSignIn } from "./User.js"
import { setPage } from "./App.js"

export {publicationRs} from "./Publication.js"
export {userRs} from "./User.js"
export {appRs} from "./App.js"

export const actionsPublications = {
    setPublications,
}

export const actionsUser = {
    setUser,
    setSignIn,
}

export const actionsApp = {
    setPage,
}