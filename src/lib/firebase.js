require('firebase/database')
const firebase = require('firebase/app')

const firebaseApp = firebase.initializeApp({
  apiKey:            process.env.FB_API_KEY,
  authDomain:        process.env.FB_AUTH_DOMAIN,
  databaseURL:       process.env.FB_DATABASE_URL,
  storageBucket:     process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID
})
export const db = firebaseApp.database()

export default firebase
