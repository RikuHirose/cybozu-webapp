import Vuex from 'vuex'
import firebase, {auth, GoogleProvider} from "~/plugins/firebase.js"


export const state = () => {
  return {
  user: [],
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export const getters = {
  user (state) {
    return state.user
  },
}

export const actions = {
  async signInWithGoogle (ctx) {
    auth.signInWithRedirect(GoogleProvider)

    auth.onAuthStateChanged(user => {
      console.log(user)
      ctx.commit('setUser', user)
    })
  },
  async signOutWithGoogle (ctx) {
    auth.signOut().then(() => {
      ctx.commit('setUser', null)
    }).catch(err => console.log(error))
  }
}
