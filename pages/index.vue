<template>
  <div>
    <h1 class="title">
      cybozu-webapp
    </h1>
    <h2 class="subtitle">
      My sublime Nuxt.js project
    </h2>
    <div class="links">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        class="button--green"
      >Documentation</a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        class="button--grey"
      >GitHub</a>
      <button
        @click="signOut"
        class="button--grey">signOut</button>
      <button
        @click="signIn"
        class="button--green">signIn</button>
    </div>
    <nuxt-link to="/company">Companies</nuxt-link>
  </div>
</template>

<script>
// import firebase from "~/plugins/firebase.js"
import firebase, {auth, GoogleProvider} from "~/plugins/firebase.js"

export default {
  asyncData () {
    return {
      isAuth: false,
    }
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged((user) => this.isAuth = !!user)
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    // signIn: function () {
    //   // const provider = new firebase.auth.GoogleAuthProvider()
    //   // firebase.auth().signInWithRedirect(provider)
    //   firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    // },
    signIn () {
      this.$store.dispatch('signInWithGoogle').then(() => {
        console.log('inside then statement on login')
      }).catch((e) => {
        console.log(e.message);
      })
    },
     signOut () {
      this.$store.dispatch('signOutWithGoogle').then(() => {
        console.log('inside then statement on logout')
      }).catch((e) => {
        console.log(e.message);
      })
    }
  },
}
</script>

<style>

</style>
