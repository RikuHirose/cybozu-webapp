<template>
  <div>
    <logo />
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
    </div>
    <nuxt-link to="/company">Companies</nuxt-link>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import firebase from "~/plugins/firebase.js"

const db = firebase.firestore()

// データの取得(全件)
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
// // データの追加
// const addItem = async (content) => {
//   return db.collection('users').add({
//     ...content,
//     createdAt: new Date(), // createAt フィールドがないとエラーが表示されるっぽい。
//   })
//   .then((res) => {
//     console.log('Add Document with ID:', res.id);
//     return res.id;
//   })
//   .catch((err) => {
//     console.error('Error: Add Document', err);
//     throw err;
//   });
// };

export default {
  components: {
    Logo
  }
}
</script>

<style>

</style>
