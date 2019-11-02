import firebase from "~/plugins/firebase.js"
const db = firebase.firestore()

export const state = () => {
  return {
  companies: []
  }
}

export const mutations = {
  setCompanies(state, companies) {
    state.companies = companies
  },
}

export const getters = {
  companies (state) {
    return state.companies
  }
}
export const actions = {
  async fetchCompanies (ctx) {
    db.collection("companies").get().then((querySnapshot) => {
      let companies = []
      querySnapshot.forEach((doc) => {
        companies.push(doc.data())
      })
      ctx.commit('setCompanies', companies)
    })
  }
}