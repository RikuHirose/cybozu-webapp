import firebase from "firebase"
import 'firebase/auth'

// .env に設定した値を取得してる
const config = {
  // apiKey: process.env.FB_API_KEY,
  // authDomain: process.env.FB_AUTH_DOMAIN,
  // databaseURL: process.env.FB_DATABASE_URL,
  // projectId: process.env.FB_PROJECTID,
  // storageBucket: process.env.FB_STORAGE_BUCKET,
  // messagingSenderId: process.env.FB_MESSAGING_SENDER_ID
  apiKey: 'AIzaSyAzFp4IO6GX7dKxWbQYiTM5U-ftbUh6sHg',
  authDomain: 'cybozu-webapp.firebaseapp.com',
  databaseURL: '',
  projectId: 'cybozu-webapp',
  storageBucket: '',
  messagingSenderId: ''
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}


export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export default firebase

