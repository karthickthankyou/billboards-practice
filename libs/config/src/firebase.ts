import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC28OrvOTXVdxFxMzb8asIeDz2wRDDe7sk',
  authDomain: 'karthick-billboards.firebaseapp.com',
  projectId: 'karthick-billboards',
  storageBucket: 'karthick-billboards.appspot.com',
  messagingSenderId: '357903908413',
  appId: '1:357903908413:web:e481e32d962ab17483b454',
  measurementId: 'G-KV8RVLY9TS',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)
export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

export const auth = getAuth(firebaseApp)
