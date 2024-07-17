import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const apiKey = import.meta.env.VITE_FB_API_KEY
const projectId = import.meta.env.VITE_PROJECT_ID
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID
const appId = import.meta.env.VITE_APP_ID

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: projectId + ".firebaseapp.com",
  projectId: projectId,
  storageBucket: projectId + ".appspot.com",
  messagingSenderId: messagingSenderId,
  appId: appId,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }
