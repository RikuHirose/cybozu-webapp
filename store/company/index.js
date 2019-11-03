import firebase from "~/plugins/firebase.js"
const db = firebase.firestore()

export const state = () => {
  return {
  company: [],
  companies: [],
  }
}

export const mutations = {
  setCompany(state, company) {
    state.company = company
  },
  setCompanies(state, companies) {
    state.companies = companies
  },
}

export const getters = {
  company (state) {
    return state.company
  },
  companies (state) {
    return state.companies
  }
}
export const actions = {
  async fetchCompany (ctx, query) {
    db.collection("companies").where('name', '==', query.companyName).get().then((querySnapshot) => {
      let company = []
      querySnapshot.forEach((doc) => {
        company.push(doc.data())
      })
      ctx.commit('setCompany', company[0])
    })
  },
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